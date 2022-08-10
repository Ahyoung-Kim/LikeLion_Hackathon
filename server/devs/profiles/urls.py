from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('hashtag', views.UserHashtagViewSet)
router.register('image', views.UserImgViewSet)
router.register('details', views.UserDetailsViewSet)
router.register('ongoing', views.UserOngoingViewSet)
router.register('skills', views.UserSkillsViewSet)
router.register('skills/details', views.UserSkillsDetailsViewSet)
router.register('study', views.UserStudyViewSet)
router.register('study/details', views.UserStudyDetailsViewSet)
router.register('cert', views.UserCertViewSet)
router.register('career', views.UserCareerViewSet)
router.register('follow', views.FollowViewSet)

urlpatterns = router.get_urls()
