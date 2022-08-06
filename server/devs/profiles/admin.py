from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(UserHashtag)
admin.site.register(UserDetails)
admin.site.register(UserOngoing)
admin.site.register(UserSkills)
admin.site.register(UserSkillsDetails)
admin.site.register(UserStudy)
admin.site.register(UserStudyDetails)
admin.site.register(UserCert)
admin.site.register(UserCareer)
admin.site.register(Follow)