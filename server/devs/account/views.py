from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.permissions import AllowAny

from django.http import Http404

from .serializers import UserSerializer, UserLoginSerializer, UserInfoSerializer
from .models import User

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


@method_decorator(csrf_exempt, name='dispatch')
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


@method_decorator(csrf_exempt, name='dispatch')
class UserView(CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except:
            status_code = status.HTTP_200_OK
            return Response({'success': "false", 'status code': status_code, }, status=status_code)
        serializer.save()  # serializer 내부의 create() 호출
        status_code = status.HTTP_201_CREATED  # 성공
        response = {
            'success': "true",
            'status code': status_code,
        }
        return Response(response, status=status_code)


@method_decorator(csrf_exempt, name='dispatch')
class UserLoginView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        user = serializer.validate(request.data)

        if user is None:
            response = {
                "success": "false",
                "status_code": status.HTTP_200_OK,
                "id": "",
            }
        else:
            response = {
                "success": "true",
                "status_code": status.HTTP_200_OK,
                "id": user.id,
            }

        return Response(response, status=status.HTTP_200_OK)


@method_decorator(csrf_exempt, name='dispatch')
class UserInfoViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserInfoSerializer
    lookup_field = "id"
