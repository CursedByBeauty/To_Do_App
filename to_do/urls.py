from django.urls import path
from rest_framework import routers
from .views import To_DoViewSet

router = routers.DefaultRouter()
router.register(r'api/todos', To_DoViewSet, 'todos')

urlpatterns = router.urls
