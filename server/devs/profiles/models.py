from django.db import models
from django.conf import settings


class UserHashtag(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    hashtag = models.CharField(max_length=100, null=True, blank=True)  # 해시태그
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.hashtag)


class UserImg(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    image = models.ImageField(
        default='media/profile-img.png',
        upload_to="uploads")

    def __str__(self):
        return str(self.user)


class UserDetails(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    belongs = models.CharField(max_length=30, null=True, blank=True)  # 학교/직업
    major = models.CharField(max_length=30, null=True, blank=True)  # 전공
    position = models.CharField(max_length=30, null=True, blank=True)  # 메인포지션
    subposition = models.CharField(max_length=30, null=True, blank=True)  # 서브포지션
    introduction = models.CharField(max_length=200, null=True, blank=True)  # 자기소개

    def __str__(self):
        return str(self.user)


class UserOngoing(models.Model):  # 현재 진행 중
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    ongoing = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.ongoing)


class UserSkills(models.Model):  # 기술스택
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    skill_type = models.CharField(max_length=100, null=True, blank=True)
    skill_name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.skill_name)


class UserSkillsDetails(models.Model):
    skill_detail = models.CharField(max_length=100, null=True, blank=True)
    skill_name = models.ForeignKey(
        "UserSkills",
        on_delete=models.CASCADE,
        related_name='detail',
        db_column='skill_name'
    )

    def __str__(self):
        return str(self.skill_detail)


class UserCert(models.Model):  # 자격증
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="cert",
        db_column='user_cert'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    certification = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.certification)


class UserCareer(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="career",
        db_column='user_career'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    career_at = models.CharField(max_length=30, null=True, blank=True)
    career_who = models.CharField(max_length=30, null=True, blank=True)
    career_when = models.CharField(max_length=30, null=True,blank=True)
    career_what = models.CharField(max_length=100, null=True, blank=True)
    career_achieve = models.CharField(max_length=100, null=True, blank=True)
    career_skills = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.career_at)


class Follow(models.Model):
    follower = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='follower'
    )
    following = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='following'
    )

    class Meta:
        db_table = 'follow'

class UserProject(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="project",
        db_column='user_project'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    position = models.CharField(max_length=30, null=True, blank=True)
    skills = models.CharField(max_length=30, null=True, blank=True)
    withs = models.CharField(null=True, max_length=200, blank=True)