from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import To_DoSerializer
from rest_framework import status
from .models import To_Do

@api_view(['GET', 'POST'])
def do_to_list(request):
    if request.method == 'GET':
        to_do = To_Do.objects.all()
        serializer = To_DoSerializer(to_do, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = To_DoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # if serializer.is_valid() == True:
        
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        # else:
        #       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def to_do_detail(request, pk):
    to_do = get_object_or_404(To_Do, pk=pk)
    if request.method == 'GET':
        serializer = To_DoSerializer(to_do)
        return Response(serializer.data)

    elif request.method == 'PUT': 
        serializer = To_DoSerializer(To_Do, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
        
    elif request.method == 'DELETE':
        to_do.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
