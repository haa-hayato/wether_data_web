from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WetherdataViewSet


router = DefaultRouter()
router.register('wether_data', WetherdataViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
