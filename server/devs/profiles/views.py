from logging import exception
from urllib import response
from .serializers import *
from .models import *
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets

# from rest_framework.renderers import JSONRenderer
# from rest_framework.parsers import JSONParser
# from django.http import Http404, JsonResponse
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name='dispatch')
class UserHashtagViewSet(viewsets.ModelViewSet):
    queryset = UserHashtag.objects.all()
    serializer_class = UserHashtagSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserImgViewSet(viewsets.ModelViewSet):
    queryset = UserImg.objects.all()
    serializer_class = UserImgSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserOngoingViewSet(viewsets.ModelViewSet):
    queryset = UserOngoing.objects.all()
    serializer_class = UserOngoingSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserSkillsViewSet(viewsets.ModelViewSet):
    queryset = UserSkills.objects.all()
    serializer_class = UserSkillsSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserSkillsDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserSkillsDetails.objects.all()
    serializer_class = UserSkillsDetailsSerializer

    def perform_create(self, serializer):
        serializer.save(skill_name=self.request.POST.get('skill_name'))


@method_decorator(csrf_exempt, name='dispatch')
class UserStudyViewSet(viewsets.ModelViewSet):
    queryset = UserStudy.objects.all()
    serializer_class = UserStudySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserStudyDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserStudyDetails.objects.all()
    serializer_class = UserStudyDetailsSerializer

    def perform_create(self, serializer):
        serializer.save(study_name=self.request.POST.get('study_name'))


@method_decorator(csrf_exempt, name='dispatch')
class UserCertViewSet(viewsets.ModelViewSet):
    queryset = UserCert.objects.all()
    serializer_class = UserCertSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserCareerViewSet(viewsets.ModelViewSet):
    queryset = UserCareer.objects.all()
    serializer_class = UserCareerSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

    # TODO
    # 현재 유저를 기준으로 count
    def count_following(self):
        filter = Follow.objects.filter(
            following='cfb6b570a8a846f49c26d58d37aef48f')
        return filter.count()

    def count_follower(self):
        filter = Follow.objects.filter(
            follower='cfb6b570a8a846f49c26d58d37aef48f')
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

        try:  # unfollow
            instance = self.queryset.get(
                following=serializer.validated_data['following'], follower=serializer.validated_data['follower'])
            self.perform_destroy(instance)

        except:  # follow
            self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
