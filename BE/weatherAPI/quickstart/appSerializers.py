from rest_framework import serializers
from quickstart import appModels as models
# Define serializers for Weather and Date models

# Serializers define the API representation ~ what the data looks like when returned to FE
# HyperlinkedModelSerializer ~ object array returned ~ (0:{city: "Atlanta", date: "2023-09-01", temp: "80", weekday: "Friday"})


class WeatherCardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.WeatherCard
        fields = ('city', 'date', 'temp', 'weekday')
