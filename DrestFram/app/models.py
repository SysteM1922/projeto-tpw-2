from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id = models.IntegerField(primary_key=True)
    bio = models.TextField(blank=True, default="Hey, I'm in Clanly!")
    name = models.CharField(max_length=50)
    
    profile_img = models.ImageField(blank=True, upload_to='profile_images/', default='defaults/no-profile.png')
    cover_img = models.ImageField(blank=True, upload_to='cover_images/', default='defaults/no-background.png')

    def __str__(self):
        return self.user.username


class Clan(models.Model):
    name = models.CharField(max_length=100)
    id = models.AutoField(primary_key=True)
    desc = models.TextField(blank=True)
    clan_img = models.ImageField(upload_to='clan_images/', default='defaults/no-clan.png')
    background = models.ImageField(upload_to='background_images/', default='defaults/no-background.png')
    followers = models.ManyToManyField(User, related_name='members')
    admins = models.ManyToManyField(User, related_name='admins')

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=100)
    id = models.AutoField(primary_key=True)
    description = models.TextField(blank=True)
    post_img = models.ImageField(upload_to='post_images/', default='defaults/no-background.png')
    clan = models.ForeignKey(Clan, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    content = models.TextField()

    def __str__(self):
        return self.content

class Tokens(models.Model):
    token = models.CharField(primary_key=True, max_length=500)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)

    def __str__(self):
        return self.token

