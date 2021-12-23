from django.urls import re_path
from employees import views

urlpatterns = [
    re_path(r'^api/employees$', views.employee_list),
    re_path(r'^api/employees/(?P<pk>[0-9]+)$', views.employee_detail),
]
