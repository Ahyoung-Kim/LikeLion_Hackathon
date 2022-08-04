from django.db import models
from django.conf import settings


class UserDetails(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    hashtag = models.CharField(max_length=100, null=True)  # 해시태그
    belongs = models.CharField(max_length=30)  # 학교/직업
    major = models.CharField(max_length=30)  # 전공
    position = models.CharField(max_length=30)  # 메인포지션
    subposition = models.CharField(max_length=30, null=True)  # 서브포지션
    introduction = models.CharField(max_length=200, null=True)  # 자기소개


class UserOngoing(models.Model):  # 현재 진행 중
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    ongoing = models.TextField()


class UserSkills(models.Model):  # 기술스택
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class UserSkillsLan(models.Model):  # 기술스택 - Programming Language
    id = models.BigAutoField(primary_key=True)
    post = models.ForeignKey(
        "UserSkills",
        related_name="post_anguage",
        on_delete=models.CASCADE,
        db_column="post_anguage")
    language = models.CharField(max_length=30)


class UserSkillsFram(models.Model):  # 기술스택 - Framework / Library
    id = models.BigAutoField(primary_key=True)
    post = models.ForeignKey(
        "UserSkills",
        related_name="post_framework",
        on_delete=models.CASCADE,
        db_column="post_framework")
    framework = models.CharField(max_length=30)


class UserStudy(models.Model):  # 개인공부
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class UserStudyCS(models.Model):  # 개인공부 - CS
    id = models.BigAutoField(primary_key=True)
    post = models.ForeignKey(
        "UserStudy",
        related_name="CS",
        on_delete=models.CASCADE,
        db_column="post_cs")
    CS = models.CharField(max_length=30)


class UserStudyPS(models.Model):  # 개인공부 - PS
    id = models.BigAutoField(primary_key=True)
    post = models.ForeignKey(
        "UserStudy",
        related_name="PS",
        on_delete=models.CASCADE,
        db_column="post_ps")
    PS = models.CharField(max_length=30)


class UserCert(models.Model):  # 자격증
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    certification = models.CharField(max_length=100, null=True)


class UserCareer(models.Model):
    id = models.BigAutoField(primary_key=True)
    email = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="user_email",
        on_delete=models.CASCADE,
        db_column="user_email")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    career_at = models.CharField(max_length=30)
    career_who = models.CharField(max_length=30)
    career_when = models.CharField(max_length=30)
    career_what = models.CharField(max_length=100)
    career_achieve = models.CharField(max_length=100)
    career_skills = models.CharField(max_length=100)
