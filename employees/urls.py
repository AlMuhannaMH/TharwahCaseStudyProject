from django.urls import re_path
from employees import views

urlpatterns = [
    re_path(r'^api/employees/$', views.employee_list, name='employee-list'),
    re_path(r'^api/employees/(?P<pk>[0-9]+)/$',
            views.employee_detail, name='employee-detail'),
    re_path(r'^api/departments/$', views.department_list,
            name='department-list'),
    re_path(r'^api/departments/(?P<pk>[0-9]+)/$',
            views.department_detail, name='department-detail'),
]
