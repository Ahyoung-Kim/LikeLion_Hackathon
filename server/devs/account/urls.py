from django.urls import URLPattern, path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import Test, UserLoginView, UserView, UserInfoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('userinfo', UserInfoViewSet)

urlpatterns = router.get_urls()

urlpatterns += [
    path('test/', Test.as_view()),
    path('signup/', UserView.as_view()),
    path('login/', UserLoginView.as_view()),
]
