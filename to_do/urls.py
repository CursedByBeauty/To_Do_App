from django.urls import path
from . import views

urlpatterns = [
    path('todo/', views.do_to_list),
]
