from django.urls import URLPattern, path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import Test, UserLoginView, UserView

urlpatterns = [
    path('test/', Test.as_view()),
    path('signup/', UserView.as_view()),
    path('login/', UserLoginView.as_view()),
    # path('<int:pk>/follow/', views.follow, name='follow'),
]
