from datetime import datetime
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Comment, Clan, Post, Profile, User, Tokens
from app.serializers import *

from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from django.core.files.base import ContentFile
from unidecode import unidecode

import re
import base64


# Create your views here.

IMG_URL = 'http://localhost:8000/images/'

def validate_token(token):
    if Tokens.objects.filter(token=token).exists():
        return True
    return False

def base64_to_image(base64_string, file_name):
    imgstr = base64_string.split(';base64,')[1]
    data = ContentFile(base64.b64decode(imgstr), name=file_name)
    return data

@api_view(['POST'])
def login(request):
    username = request.data['username']
    password = request.data['password']
    try:
        user = authenticate(username=username, password=password)
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        profile = Profile.objects.get(user=user)
        Tokens.objects.create(token=token, user=profile)
        return Response({"token": token, "id": user.id})
    except:
        return Response({"error": "Wrong Username or Password"})

@api_view(['POST'])
def signup(request):
    username = request.data['username']
    if not username or username == "":
        return Response({"error": "Username Invalid"})
    email = request.data['email']
    if not email or re.fullmatch(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b', email) is None:
        return Response({"error": "Email Invalid"})
    name = request.data['name']
    if not name or name == "":
        return Response({"error": "Name Invalid"})
    password = request.data['password']
    if not password or password == "":
        return Response({"error": "Password Invalid"})
    elif len(password) < 8:
        return Response({"error": "Password too short (minimum is 8 characters)"})
    try:
        # if user with the same username already exists then it will throw an error
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        profile = Profile(user=user, id=user.id, name=name)
        profile.save()
        return Response({"success": "User created successfully"})
    except:
        return Response({"error": "User already exists"})
    
@api_view(['PUT'])
def logout(request):
    token = request.data['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    Tokens.objects.filter(token=token).delete()
    return Response({"success": "Logged out successfully"})
    
@api_view(['GET'])
def profile(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    name = profile.name
    bio = profile.bio
    profileImgUrl = profile.profile_img.name
    coverImgUrl = profile.cover_img.name
    nFollowing = Clan.objects.filter(followers=user).count()
    nComments = Comment.objects.filter(user=user).count()
    labels = []
    data = []
    posts = PostSerializer(Post.objects.filter(author=user), many=True).data
    nPosts = len(posts)
    for clan in Clan.objects.filter(followers=user):
        labels.append(clan.name)
        data.append(Post.objects.filter(clan=clan, author=user).count())
    return Response({"name": name, "bio": bio, "profileImageUrl": profileImgUrl, "coverImageUrl": coverImgUrl, "nFollowing":nFollowing, "nPosts": nPosts, "nComments": nComments, "labels": labels, "data": data, "posts": posts})

@api_view(['GET'])
def basic_profile(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    name = profile.name
    bio = profile.bio
    return Response({"name": name, "bio": bio})

@api_view(['GET'])
def basic_clan(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    clan = Clan.objects.get(id=request.GET['id'])
    name = clan.name
    desc = clan.desc
    return Response({"name": name, "desc": desc})

@api_view(['PUT'])
def update_profile(request):

    token = request.data['token']

    if not validate_token(token):
        return Response({"error": "Invalid token"})
    
    profile = Tokens.objects.get(token=token).user
    user = profile.user

    if user.check_password(request.data['password']) == False:
        return Response({"error": "Wrong password"})
    
    if 'name' in request.data:
        profile.name = request.data['name']

    if 'bio' in request.data:
        profile.bio = request.data['bio']

    if 'img' in request.data:
        image = base64_to_image(request.data['img'][0], request.data['img'][1])
        profile.profile_img = image

    if 'background_img' in request.data:
        image = base64_to_image(request.data['background_img'][0], request.data['background_img'][1])
        profile.cover_img = image

    if 'new_password' in request.data:

        if request.data['new_password'] == "":
            return Response({"error": "Password Invalid"})
        
        elif len(request.data['new_password']) < 8:
            return Response({"error": "Password too short (minimum is 8 characters)"})
        
        user.set_password(request.data['new_password'])
        user.save()

    profile.user = user
    profile.save()
    return Response({"success": "Profile updated successfully"})

@api_view(['POST'])
def create_clan(request):
    token = request.data['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    name = request.data['name']
    if not name or name == "":
        return Response({"error": "Name Invalid"})
    if Clan.objects.filter(name=name).exists():
        return Response({"error": "Clan already exists"})
    desc = request.data['desc']
    if not desc or desc == "":
        return Response({"error": "Description Invalid"})
    clan = Clan.objects.create(name=name, desc=desc)
    clan.admins.add(user)
    if 'img' in request.data:
        image = base64_to_image(request.data['img'][0], request.data['img'][1])
        clan.clan_img = image
    if 'background_img' in request.data:
        image = base64_to_image(request.data['background_img'][0], request.data['background_img'][1])
        clan.background = image
    clan.followers.add(user)
    clan.save()
    return Response({"success": "Clan created successfully"})

@api_view(['GET'])
def my_clans(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clans = Clan.objects.filter(admins=user)
    data = []
    for clan in clans:
        data.append({"id": clan.id, "name": clan.name, "desc": clan.desc, "img": clan.clan_img.name, "background": clan.background.name, "isAdmin": True})
    for clan in Clan.objects.filter(followers=user):
        if clan not in clans:
            data.append({"id": clan.id, "name": clan.name, "desc": clan.desc, "img": clan.clan_img.name, "background": clan.background.name, "isAdmin": False})
    return Response({"clans": data})

@api_view(['PUT'])
def update_clan(request):
    token = request.data['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clan_id = request.data['id']
    if Clan.objects.filter(id=clan_id).exists() == False:
        return Response({"error": "Clan does not exist"})
    clan = Clan.objects.get(id=clan_id)
    if not clan.admins.filter(id=user.id).exists():
        return Response({"error": "You are not an admin of this clan"})
    if 'name' in request.data:
        name = request.data['name']
        if not name or name == "":
            return Response({"error": "Name Invalid"})
        if Clan.objects.filter(name=name).exists() and Clan.objects.get(name=name).id != clan.id:
            return Response({"error": "Clan Name already exists"})
        clan.name = name
    if 'desc' in request.data:
        desc = request.data['desc']
        if not desc or desc == "":
            return Response({"error": "Description Invalid"})
        clan.desc = desc
    if 'img' in request.data:
        image = base64_to_image(request.data['img'][0], request.data['img'][1])
        clan.clan_img = image
    if 'background_img' in request.data:
        image = base64_to_image(request.data['background_img'][0], request.data['background_img'][1])
        clan.background = image
    clan.save()
    return Response({"success": "Clan edited successfully"})

@api_view(['GET'])
def get_clan(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clan_id = request.GET['id']
    if Clan.objects.filter(id=clan_id).exists() == False:
        return Response({"error": "Clan does not exist"})
    clan = Clan.objects.get(id=clan_id)
    follow = clan.followers.filter(id=user.id).exists()
    nFollowers = clan.followers.count()
    posts = PostSerializer(Post.objects.filter(clan=clan.id), many=True).data
    nPosts = len(posts)
    return Response({"id": clan.id, "name": clan.name, "desc": clan.desc, "img": clan.clan_img.name, "background": clan.background.name, "nFollowers":nFollowers, "nPosts":nPosts, "posts":posts, "follow": follow})

@api_view(['PUT'])
def follow_clan(request):
    token = request.data['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clan_id = request.data['id']
    if Clan.objects.filter(id=clan_id).exists() == False:
        return Response({"error": "Clan does not exist"})
    clan = Clan.objects.get(id=clan_id)
    if not clan.followers.filter(id=user.id).exists():
        clan.followers.add(user)
        return Response({"success": "Followed"})
    else:
        return Response({"error": "Already following"})
    
@api_view(['PUT'])
def unfollow_clan(request):
    token = request.data['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clan_id = request.data['id']
    if Clan.objects.filter(id=clan_id).exists() == False:
        return Response({"error": "Clan does not exist"})
    clan = Clan.objects.get(id=clan_id)
    if clan.followers.filter(id=user.id).exists():
        clan.followers.remove(user)
        return Response({"success": "Unfollowed"})
    else:
        return Response({"error": "Not following"})
    
@api_view(['GET'])
def following_clans(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clans = Clan.objects.filter(followers=user)
    data = []
    for clan in clans:
        data.append({"id": clan.id, "name": clan.name})
    return Response({"clans": data})
    
@api_view(['POST'])
def create_post(request):
    token = request.data['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clan_id = request.data['clan']
    if Clan.objects.filter(id=clan_id).exists() == False:
        return Response({"error": "Clan does not exist"})
    clan = Clan.objects.get(id=clan_id)
    if not clan.followers.filter(id=user.id).exists():
        return Response({"error": "You are not following this clan"})
    if 'title' in request.data:
        title = request.data['title']
        if not title or title == "":
            return Response({"error": "Title Invalid"})
    if 'content' in request.data:
        content = request.data['content']
        if not content or content == "":
            return Response({"error": "Content Invalid"})
    post = Post.objects.create(clan=clan, author=user, title=title, description=content, created=datetime.today())
    if 'image' in request.data:
        image = base64_to_image(request.data['image'][0], request.data['image'][1])
        post.post_img = image
    post.save()
    return Response({"success": "Post created successfully"})

@api_view(['GET'])
def basic_post(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    post_id = request.GET['id']
    if Post.objects.filter(id=post_id).exists() == False:
        return Response({"error": "Post does not exist"})
    post = Post.objects.get(id=post_id)
    clan = ClanSerializer(Clan.objects.get(id=post.clan.id)).data
    author = ProfileSerializer(Profile.objects.get(id=User.objects.get(id=post.author.id).profile.id)).data
    author["username"] = User.objects.get(id=post.author.id).username
    comments = CommentSerializer(Comment.objects.filter(post=post), many=True).data
    for comment in comments:
        profile = ProfileSerializer(Profile.objects.get(id=User.objects.get(id=comment['user']).profile.id)).data
        profile["username"] = User.objects.get(id=comment['user']).username
        comment['user'] = profile
    return Response({"author": author, "clan": clan, "comments": comments})
    
@api_view(['POST'])
def create_comment(request):
    token = request.data['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    post_id = request.data['post']
    if Post.objects.filter(id=post_id).exists() == False:
        return Response({"error": "Post does not exist"})
    post = Post.objects.get(id=post_id)
    if 'comment' in request.data:
        comment = request.data['comment']
        if not comment or comment == "":
            return Response({"error": "Comment Invalid"})
    comment = Comment.objects.create(post=post, user=user, content=comment)
    return Response(CommentSerializer(comment).data)

@api_view(['DELETE'])
def delete_post(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    post_id = request.GET['id']
    if Post.objects.filter(id=post_id).exists() == False:
        return Response({"error": "Post does not exist"})
    post = Post.objects.get(id=post_id)
    if post.author.id != user.id:
        return Response({"error": "You are not the author of this post"})
    post.delete()
    return Response({"success": "Post deleted successfully"})

@api_view(['DELETE'])
def delete_comment(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    comment_id = request.GET['id']
    if Comment.objects.filter(id=comment_id).exists() == False:
        return Response({"error": "Comment does not exist"})
    comment = Comment.objects.get(id=comment_id)
    if comment.user.id != user.id:
        return Response({"error": "You are not the author of this comment"})
    comment.delete()
    return Response({"success": "Comment deleted successfully"})

@api_view(['GET'])
def main_feed(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user
    clans = Clan.objects.filter(followers=user)
    posts = []
    for clan in clans:
        posts.extend(Post.objects.filter(clan=clan))
    data = []
    for post in posts:
        data.append(PostSerializer(post).data)
    data.sort(key=lambda x: x['created'], reverse=True)
    return Response({"posts": data})

@api_view(['GET'])
def search(request):
    token = request.GET['token']
    if not validate_token(token):
        return Response({"error": "Invalid token"})
    profile = Tokens.objects.get(token=token).user
    user = profile.user	
    clans = Clan.objects.filter(followers=user)
    posts = []
    for clan in clans:
        posts.extend(Post.objects.filter(clan=clan))
    if "search" in request.GET:
        title = unidecode(request.GET['search']).lower()
        for post in list(posts):
            if title not in unidecode(post.title).lower():
                posts.remove(post)
    if "clan" in request.GET:
        clan = request.GET['clan']
        if Clan.objects.filter(id=clan).exists():
            clan = Clan.objects.get(id=clan)
            for post in list(posts):
                if post.clan != clan:
                    posts.remove(post)
        else:
            posts = []
    if "user" in request.GET:
        username = request.GET['user']
        if User.objects.filter(username=username).exists():
            user = User.objects.get(username=username)
            for post in list(posts):
                if post.author != user:
                    posts.remove(post)
        else:
            posts = []
    if "date" in request.GET:
        date = request.GET['date']
        for post in list(posts):
            if str(post.created.date()) != str(date):
                posts.remove(post)
    data=[]
    clans=[]
    for post in posts:
        post = PostSerializer(post).data
        user = User.objects.get(id=post['author'])
        post['author'] = ProfileSerializer(Profile.objects.get(id=user.profile.id)).data
        post['username'] = user.username
        post['clan'] = ClanSerializer(Clan.objects.get(id=post['clan'])).data
        data.append(post)
        if post['clan'] not in clans:
            clans.append(post['clan'])
    return Response({"posts": data, "clans": clans})
