from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(UserDetails)
admin.site.register(UserOngoing)
admin.site.register(UserSkills)
# admin.site.register(UserSkillsLan)
# admin.site.register(UserSkillsFram)
admin.site.register(UserStudy)
# admin.site.register(UserStudyCS)
# admin.site.register(UserStudyPS)
admin.site.register(UserCert)
admin.site.register(UserCareer)
admin.site.register(Follow)