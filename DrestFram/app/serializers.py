from rest_framework import serializers
from app.models import *

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user', 'id_user', 'bio', 'fname', 'lname', 'profile_img', 'cover_img')

class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('name', 'id_community', 'description', 'communityimg', 'background', 'members', 'admins', \
            'banned', 'created', 'updated', 'private')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'id_post', 'description', 'postimg', 'community', 'author', 'created', 'updated')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'post', 'id_comment', 'content', 'created_at', 'updated_at')

