# from django.urls import URLPattern, path
# from rest_framework.urlpatterns import format_suffix_patterns
# from .views import Test, UserLoginView, UserView
# from .views import detail

# urlpatterns = [
#     path('test/', Test.as_view()),
#     path('signup/', UserView.as_view()),
#     path('login/', UserLoginView.as_view()),
#     path('<int:pk>/', views.detail, name='detail')
# ]

from django.urls import path, include
#from .views import UserDetailsDetail, UserDetailsView
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('details', views.UserDetailsViewSet)
router.register('ongoing', views.UserOngoingViewSet)
router.register('skills', views.UserSkillsViewSet)
router.register('skills-lan', views.UserSkillsLanViewSet)
router.register('skills-fram', views.UserSkillsFramViewSet)
router.register('study', views.UserStudyViewSet)
router.register('studyCS', views.UserStudyCSViewSet)
router.register('studyPS', views.UserStudyPSViewSet)
router.register('cert', views.UserCertViewSet)
router.register('career', views.UserCareerViewSet)

urlpatterns = router.get_urls()
