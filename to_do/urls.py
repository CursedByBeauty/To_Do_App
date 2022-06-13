from django.urls import path
from . import views

urlpatterns = [
    path('', views.do_to_list),
    path('<pk>/', views.to_do_detail), 
]
