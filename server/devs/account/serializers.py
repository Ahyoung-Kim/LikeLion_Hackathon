from .models import User
from rest_framework import serializers
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'nickname', 'name')
        extra_kwargs = {"password": {"write_only":True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)
        user = authenticate(email=email, password=password)

        # TODO
        if user is None:
            return "false"

        return user.email