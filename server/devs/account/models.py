from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
import uuid
from django.conf import settings
from django.utils import timezone

# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, name, email, nickname, password=None):
        if not email:
            raise ValueError("Users Must Have an email address")
        user = self.model(
            name=name,
            email=self.normalize_email(email),
            nickname=nickname,
        )
        user.set_password(password)  # 비밀번호를 hash로 저장 (보안)

        user.save()
        return user

    def create_superuser(self, nickname, email, name, password):
        if password is None:
            raise TypeError("Superusers must have a password.")

        user = self.create_user(nickname, email, name, password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(
        verbose_name='email address',
        max_length=100,
        unique=True
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    before_last_login = models.DateTimeField(default=timezone.now)
    nickname = models.CharField(
        max_length=20,
        unique=True,
    )
    name = models.CharField(max_length=10)

    # followers = models.ManyToManyField(
    #     settings.AUTH_USER_MODEL,
    #     related_name='followings'
    # )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nickname', 'name', ]

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        db_table = "user"
