from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from employees.models import Employee, Department
from employees.serializers import EmployeeSerializer, DepartmentSerializer
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt


@api_view(['GET', 'POST', 'DELETE'])
@csrf_exempt
def employee_list(request):
    # Retrieve objects (with condition)
    if request.method == 'GET':
        employees = Employee.objects.all()
        first_name = request.GET.get('first_name', None)
        if first_name is not None:
            employees = employees.filter(first_name__icontains=first_name)
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)
    # Create a new object
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse(employee_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Delete all objects
    elif request.method == 'DELETE':
        count = Employee.objects.all().delete()
        return JsonResponse({'message': '{} Employees were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def department_list(request):
    # Retrieve objects (with condition)
    if request.method == 'GET':
        department = Department.objects.all()
        name = request.GET.get('name', None)
        if name is not None:
            department = department.filter(name__icontains=name)
        department_serializer = DepartmentSerializer(department, many=True)
        return JsonResponse(department_serializer.data, safe=False)
    # Create a new object
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse(department_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(department_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Delete all objects
    elif request.method == 'DELETE':
        count = Department.objects.all().delete()
        return JsonResponse({'message': '{} Department were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
@csrf_exempt
def employee_detail(request, pk):
    try:
        employee = Employee.objects.get(pk=pk)
    except Employee.DoesNotExist:
        return JsonResponse({'message': 'The employee does not exist'}, status=status.HTTP_404_NOT_FOUND)
    # Find all objects by condition
    if request.method == 'GET':
        employee_serializer = EmployeeSerializer(employee)
        return JsonResponse(employee_serializer.data)
    # Update an object
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(employee, data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse(employee_serializer.data)
        return JsonResponse(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Delete an object
    elif request.method == 'DELETE':
        employee.delete()
        return JsonResponse({'message': 'Employee was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def department_detail(request, pk):
    try:
        department = Department.objects.get(pk=pk)
    except Department.DoesNotExist:
        return JsonResponse({'message': 'The department does not exist'}, status=status.HTTP_404_NOT_FOUND)
    # Find all objects by condition
    if request.method == 'GET':
        department_serializer = DepartmentSerializer(department)
        return JsonResponse(department_serializer.data)
    # Update an object
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(
            department, data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse(department_serializer.data)
        return JsonResponse(department_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Delete an object
    elif request.method == 'DELETE':
        department.delete()
        return JsonResponse({'message': 'Department was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
