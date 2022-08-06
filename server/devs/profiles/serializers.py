from .models import *
from rest_framework import serializers


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = '__all__'


class UserOngoingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserOngoing
        fields = '__all__'


class UserSkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkills
        fields = '__all__'

class UserSkillsDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkillsDetails
        fields = '__all__'

class UserStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserStudy
        fields = '__all__'

class UserStudyDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserStudyDetails
        fields = '__all__'
        
class UserCertSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCert
        fields = '__all__'


class UserCareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCareer
        fields = '__all__'

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = '__all__'
