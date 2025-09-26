from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'core/index.html')

def vendedores(request):
    return render(request, 'core/vendedores.html')
