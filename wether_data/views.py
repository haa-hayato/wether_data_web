from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Wetherdata
from .serializers import WetherdataSerializer

class WetherdataViewSet(viewsets.ModelViewSet):

    queryset = Wetherdata.objects.all()
    serializer_class = WetherdataSerializer