from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def peticiones(request):
    return render(request, 'peticiones.html')