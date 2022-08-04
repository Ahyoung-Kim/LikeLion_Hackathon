from .serializers import *
from .models import *
from django.shortcuts import render
from rest_framework import viewsets

# from rest_framework.renderers import JSONRenderer
# from rest_framework.parsers import JSONParser
# from django.http import Http404, JsonResponse
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status


class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer


class UserOngoingViewSet(viewsets.ModelViewSet):
    queryset = UserOngoing.objects.all()
    serializer_class = UserOngoingSerializer


class UserSkillsViewSet(viewsets.ModelViewSet):
    queryset = UserSkills.objects.all()
    serializer_class = UserSkillsSerializer


class UserSkillsLanViewSet(viewsets.ModelViewSet):
    queryset = UserSkillsLan.objects.all()
    serializer_class = UserSkillsLanSerializer


class UserSkillsFramViewSet(viewsets.ModelViewSet):
    queryset = UserSkillsFram.objects.all()
    serializer_class = UserSkillsFramSerializer


class UserStudyViewSet(viewsets.ModelViewSet):
    queryset = UserStudy.objects.all()
    serializer_class = UserStudySerializer


class UserStudyCSViewSet(viewsets.ModelViewSet):
    queryset = UserStudyCS.objects.all()
    serializer_class = UserStudyCSSerializer


class UserStudyPSViewSet(viewsets.ModelViewSet):
    queryset = UserStudyPS.objects.all()
    serializer_class = UserStudyPSSerializer


class UserCertViewSet(viewsets.ModelViewSet):
    queryset = UserCert.objects.all()
    serializer_class = UserCertSerializer


class UserCareerViewSet(viewsets.ModelViewSet):
    queryset = UserCareer.objects.all()
    serializer_class = UserCareerSerializer


ongoing_list = UserOngoingViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

ongoing_detail = UserOngoingViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy',
})


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
