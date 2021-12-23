from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from employees.models import Employee
from employees.serializers import EmployeeSerializer
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET', 'POST', 'DELETE'])
def employee_list(request):
    @api_view(['GET', 'PUT', 'DELETE'])
    def employee_detail(request, pk):
        # find employee by pk (id)
        try:
            employee = Employee.objects.get(pk=pk)
        except Employee.DoesNotExist:
            return JsonResponse({'message': 'The employee does not exist'}, status=status.HTTP_404_NOT_FOUND)
