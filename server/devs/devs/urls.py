from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from django.conf import settings   
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('test/', include('account.urls'))
    path('account/', include('account.urls')),
    path('profiles/', include('profiles.urls')),
    #re_path('.*', TemplateView.as_view(template_name="index.html")),
    
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += re_path('.*', TemplateView.as_view(template_name="index.html")),