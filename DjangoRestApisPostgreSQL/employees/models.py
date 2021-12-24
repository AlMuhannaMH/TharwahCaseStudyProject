from django.db import models

# Create your models here.


class Employee(models.Model):
    first_name = models.CharField(max_length=30, blank=False, default='')
    last_name = models.CharField(max_length=30, blank=False, default='')
    job_title = models.CharField(max_length=70, blank=False, default='')
    manager = models.ForeignKey(
        'self', on_delete=models.CASCADE, blank=True, null=True)
    department = models.ForeignKey(
        'Department', on_delete=models.CASCADE, blank=False, default='')


class Department(models.Model):
    hod = models.ForeignKey(
        'Employee', on_delete=models.CASCADE, blank=True, null=True, related_name='heads_of_department')
    name = models.CharField(max_length=100, blank=False, default='')
