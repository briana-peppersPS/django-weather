from django.db import models
# Create your models here.

# TypeScript types


class WeatherCard(models.Model):
    city = models.CharField(max_length=100)
    date = models.DateField()
    temp = models.DecimalField(max_digits=3, decimal_places=0)
    weekday = models.CharField(max_length=100)
