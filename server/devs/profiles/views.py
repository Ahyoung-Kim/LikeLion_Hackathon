from logging import exception
from urllib import response
from .serializers import *
from .models import *
from django.shortcuts import render
from rest_framework import viewsets

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.http import Http404, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer


class UserOngoingViewSet(viewsets.ModelViewSet):
    queryset = UserOngoing.objects.all()
    serializer_class = UserOngoingSerializer


class UserSkillsViewSet(viewsets.ModelViewSet):
    queryset = UserSkills.objects.all()
    serializer_class = UserSkillsSerializer


# class UserSkillsLanViewSet(viewsets.ModelViewSet):
#     queryset = UserSkillsLan.objects.all()
#     serializer_class = UserSkillsLanSerializer


# class UserSkillsFramViewSet(viewsets.ModelViewSet):
#     queryset = UserSkillsFram.objects.all()
#     serializer_class = UserSkillsFramSerializer


class UserStudyViewSet(viewsets.ModelViewSet):
    queryset = UserStudy.objects.all()
    serializer_class = UserStudySerializer


# class UserStudyCSViewSet(viewsets.ModelViewSet):
#     queryset = UserStudyCS.objects.all()
#     serializer_class = UserStudyCSSerializer


# class UserStudyPSViewSet(viewsets.ModelViewSet):
#     queryset = UserStudyPS.objects.all()
#     serializer_class = UserStudyPSSerializer


class UserCertViewSet(viewsets.ModelViewSet):
    queryset = UserCert.objects.all()
    serializer_class = UserCertSerializer


class UserCareerViewSet(viewsets.ModelViewSet):
    queryset = UserCareer.objects.all()
    serializer_class = UserCareerSerializer


class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

    # TODO
    # 현재 유저를 기준으로 count
    def count_following(self):
        filter = Follow.objects.filter(following = 'cfb6b570a8a846f49c26d58d37aef48f')
        return filter.count()

    def count_follower(self):
        filter = Follow.objects.filter(follower = 'cfb6b570a8a846f49c26d58d37aef48f')
        return filter.count()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        response = {
            "data": serializer.data,
            "following": self.count_following(),
            "follower": self.count_follower()
        }
        return Response(response)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try: # unfollow
            instance = self.queryset.get(following=serializer.validated_data['following'], follower=serializer.validated_data['follower'])
            self.perform_destroy(instance)

        except: # follow
            self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

# ongoing_list = UserOngoingViewSet.as_view({
#     'get': 'list',
#     'post': 'create',
# })

# ongoing_detail = UserOngoingViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy',
# })


# # @csrf_exempt
# class UserDetailsView(APIView):
#     def get(self, request):
#         users = UserDetails.objects.all()

#         serializer = UserDetailsSerializer(users, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = UserDetailsSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class UserDetailsDetail(APIView):
#     def get_object(self, pk):
#         try:
#             return UserDetails.objects.get(pk=pk)
#         except UserDetails.DoesNotExist:
#             raise Http404

#     def get(self, request, pk):
#         post = self.get_object(pk)
#         serializer = UserDetailsSerializer(post)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         post = self.get_object(pk)
#         serializer = UserDetailsSerializer(post, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         post = self.get_object(pk)
#         post.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
