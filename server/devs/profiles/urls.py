from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('hashtag', views.UserHashtagViewSet)
router.register('image', views.UserImgViewSet)
router.register('details', views.UserDetailsViewSet)
router.register('ongoing', views.UserOngoingViewSet)
router.register('skills', views.UserSkillsViewSet)
router.register('skillspl', views.UserSkillsPLViewSet)
router.register('skillsfl', views.UserSkillsFLViewSet)
router.register('cert', views.UserCertViewSet)
router.register('career', views.UserCareerViewSet)
router.register('follower', views.FollowerViewSet)
router.register('following', views.FollowingViewSet)
router.register('project', views.UserProjectViewSet)

urlpatterns = router.get_urls()
