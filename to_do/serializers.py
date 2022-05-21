from rest_framework import serializers
from .models import To_Do

class To_DoSerializer(serializers.ModelSerializer):
    class Meta:
        model = To_Do
        fields = '__all__'