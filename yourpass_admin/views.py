from tkinter import E
from django.shortcuts import render
from django.shortcuts import HttpResponse
# from .models import Event
from datetime import datetime

# Create your views here.
def overview(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        location = request.POST.get('location')
        date = datetime.strptime(request.POST.get('date'),'%Y-%m-%d')
        time = datetime.strptime(request.POST.get('time'),'%H:%M')
        # print(title,description,location,date,time)
        title = Event(title=title,description=description,
                       location=location,date=date,time=time)
    return render(request, 'yourpass_admin/overview.html')