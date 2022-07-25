from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .serializers import UserSerializer
from .models import User

# Create your views here.

class Test(APIView):
  def get(self, req):
    users = User.objects.all()

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

  def post(self, req):
    serializer = UserSerializer(data=req.data)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
