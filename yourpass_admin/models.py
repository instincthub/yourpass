from django.db import models
# from django.contrib.auth import get_user_model


# Create your models here.
class Event(models.Model):
    # user = models.OneToOneField('auth.User',on_delete=models.CASCADE,default='me')
    # title = models.CharField(max_length=200)
    # description = models.TextField()
    # location = models.CharField(max_length=200)
    date = models.DateTimeField(null=True,blank=True)
    # time = models.DateTimeField()
    # image = models.ImageField(upload_to='%Y/%m/%d')
    
    # def __str__(self):
    #     return self.title
    
    