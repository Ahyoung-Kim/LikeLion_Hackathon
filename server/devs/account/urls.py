from django.urls import URLPattern, path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import Test, UserView

urlpatterns = [
  path('test/', Test.as_view()),
  path('signup/', UserView.as_view()),
]