from django.db import models

# Create your models here.
from django.db import models


class Employee(models.Model):
    first_name = models.CharField(max_length=30, blank=False, default='')
    last_name = models.CharField(max_length=30, blank=False, default='')
    job_title = models.CharField(max_length=70, blank=False, default='')
    manager = models.ForeignKey("self", blank=True, null=True)
    department = models.ForeignKey("Department")


class Department(models.Model):
    hod = models.ForeignKey("Employee")
    name = models.CharField(max_length=100)
