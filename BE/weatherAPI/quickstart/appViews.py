
# Create your views here.
from quickstart.appModels import WeatherCard
from quickstart.appSerializers import WeatherCardSerializer
from rest_framework import viewsets


class WeatherCardViewSet(viewsets.ModelViewSet):
    queryset = WeatherCard.objects.all().order_by('date')
    serializer_class = WeatherCardSerializer
