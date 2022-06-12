from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import To_DoSerializer
from .models import To_Do

@api_view(['GET'])
def do_to_list(request):
    todo = To_Do.objects.all()

    serializer = To_DoSerializer(todo, many=True)

    return Response(serializer.data) 
