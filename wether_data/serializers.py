from rest_framework import serializers
from .models import Wetherdata

class WetherdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wetherdata
        fields = ['date', 'prefecture', 'maxtemp', 'mintemp', 'precipitation', 'snowfall', 'summary']
