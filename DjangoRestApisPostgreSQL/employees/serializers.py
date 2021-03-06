from rest_framework import serializers
from employees.models import Employee, Department


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id',
                  'first_name',
                  'last_name',
                  'job_title',
                  'department',
                  'manager')


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('id',
                  'hod',
                  'name')
