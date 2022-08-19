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
    lookup_field = "user"

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


@method_decorator(csrf_exempt, name='dispatch')
class UserImgViewSet(viewsets.ModelViewSet):
    queryset = UserImg.objects.all()
    serializer_class = UserImgSerializer
    lookup_field = "user"

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer
    lookup_field = "user"

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserOngoingViewSet(viewsets.ModelViewSet):
    queryset = UserOngoing.objects.all()
    serializer_class = UserOngoingSerializer
    lookup_field = "user"

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instances = UserOngoing.objects.filter(user_id=str(kwargs['user']))
        response = []
        for idx in range(len(instances)):
            response.append(self.get_serializer(instances[idx]).data)
        return Response(response)


@method_decorator(csrf_exempt, name='dispatch')
class UserSkillsViewSet(viewsets.ModelViewSet):
    queryset = UserSkills.objects.all()
    serializer_class = UserSkillsSerializer
    lookup_field = "user"

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instances = UserSkills.objects.filter(user_id=str(kwargs['user']))
        response = []
        for idx in range(len(instances)):
            response.append(self.get_serializer(instances[idx]).data)
        return Response(response)


@method_decorator(csrf_exempt, name='dispatch')
class UserSkillsPLViewSet(viewsets.ModelViewSet):
    queryset = UserSkillsDetails.objects.all()
    serializer_class = UserSkillsDetailsSerializer
    lookup_field = "user_id"
    
    # def perform_create(self, serializer):
    #     skill_name_id = self.request.POST.get('skill_name')
    #     serializer.save(skill_name=UserSkills.objects.get(pk=skill_name_id))

    def retrieve(self, request, *args, **kwargs):
        instances = UserSkills.objects.filter(
            user_id=str(kwargs['user_id']), skill_type="pl"
        )
        response = []
        for instance in instances:
            temp = UserSkillsDetails.objects.filter(skill_name=instance.id)
            for idx in range(len(temp)):
                serializer = self.get_serializer(temp[idx]).data
                response.append({
                    "skill_detail": serializer["skill_detail"],
                    "skill_name": instance.skill_name
                })
        return Response(response)


@method_decorator(csrf_exempt, name='dispatch')
class UserSkillsFLViewSet(viewsets.ModelViewSet):
    queryset = UserSkillsDetails.objects.all()
    serializer_class = UserSkillsDetailsSerializer
    lookup_field = "user_id"

    # def perform_create(self, serializer):
    #     skill_name_id = self.request.POST.get('skill_name')
    #     serializer.save(skill_name=UserSkills.objects.get(pk=skill_name_id))

    def retrieve(self, request, *args, **kwargs):
        instances = UserSkills.objects.filter(
            user_id=str(kwargs['user_id']), skill_type="fl"
        )
        response = []
        for instance in instances:
            temp = UserSkillsDetails.objects.filter(skill_name=instance.id)
            for idx in range(len(temp)):
                serializer = self.get_serializer(temp[idx]).data
                response.append({
                    "skill_detail": serializer["skill_detail"],
                    "skill_name": instance.skill_name
                })
        return Response(response)


@method_decorator(csrf_exempt, name='dispatch')
class UserCertViewSet(viewsets.ModelViewSet):
    queryset = UserCert.objects.all()
    serializer_class = UserCertSerializer
    lookup_field = "user"

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instances = UserCert.objects.filter(user_id=str(kwargs['user']))
        response = []
        for idx in range(len(instances)):
            response.append(self.get_serializer(instances[idx]).data)
        return Response(response)


@method_decorator(csrf_exempt, name='dispatch')
class UserCareerViewSet(viewsets.ModelViewSet):
    queryset = UserCareer.objects.all()
    serializer_class = UserCareerSerializer
    lookup_field = "user"

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instances = UserCareer.objects.filter(user_id=str(kwargs['user']))
        response = []
        for idx in range(len(instances)):
            response.append(self.get_serializer(instances[idx]).data)
        return Response(response)


@method_decorator(csrf_exempt, name='dispatch')
class FollowerViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    lookup_field = "user"

    # TODO
    # 현재 유저를 기준으로 count
    def count_following(self):
        filter = Follow.objects.filter(
            following=self.request.user)
        return filter.count()

    def count_follower(self):
        filter = Follow.objects.filter(
            follower=self.request.user)
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

    def retrieve(self, request, *args, **kwargs):
        print(kwargs['user'])
        instances = Follow.objects.filter(following_id=str(kwargs['user']))
        response = []
        for idx in range(len(instances)):
            response.append(self.get_serializer(instances[idx]).data)
        return Response(response)

@method_decorator(csrf_exempt, name='dispatch')
class FollowingViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    lookup_field = "user"

    def retrieve(self, request, *args, **kwargs):
        instances = Follow.objects.filter(follower_id=str(kwargs['user']))
        response = []
        for idx in range(len(instances)):
            response.append(self.get_serializer(instances[idx]).data)
        return Response(response)
        
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
       
        try:  # unfollow
            instance = self.queryset.get(
                following=serializer.data['following'], follower=self.request.user.id)            
            self.perform_destroy(instance)

        except:  # follow
            self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

@method_decorator(csrf_exempt, name='dispatch')
class UserProjectViewSet(viewsets.ModelViewSet):
    queryset = UserProject.objects.all()
    serializer_class = UserProjectSerializer

    def retrieve(self, request, *args, **kwargs):
        instances = UserProject.objects.filter(user_id=str(kwargs['user']))
        response = []
        for idx in range(len(instances)):
            response.append(self.get_serializer(instances[idx]).data)
        return Response(response)