from django.db import models

# Create your models here.
class To_Do(models.Model):
    name = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    