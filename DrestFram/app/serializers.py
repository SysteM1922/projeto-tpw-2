from rest_framework import serializers
from app.models import *

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user', 'bio', 'name', 'profile_img', 'cover_img')
    profile_img = serializers.StringRelatedField(read_only=True)
    cover_img = serializers.StringRelatedField(read_only=True)

class ClanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clan
        fields = ('name', 'id', 'desc', 'clan_img', 'background', 'followers', 'admins')
    clan_img = serializers.StringRelatedField(read_only=True)
    background = serializers.StringRelatedField(read_only=True)
    
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'post', 'content')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'post_img', 'clan', 'author', 'created')
    post_img = serializers.StringRelatedField(read_only=True)

