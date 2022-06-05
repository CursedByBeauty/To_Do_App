from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializers import To_DoSerializer
from .models import To_Do

class To_DoViewSet(viewsets.ModelViewSet):
    serializer_class = To_DoSerializer
    queryset = To_Do.objects.all()
