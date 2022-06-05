from django.urls import path
from rest_framework import routers
from .views import To_DoViewSet

router = routers.DefaultRouter()
router.register(r'api/to_dos', To_DoViewSet, 'to_dos')

urlpatterns = router.urls
