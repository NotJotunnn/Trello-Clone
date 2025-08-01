from django.urls import path
from trello.views import index

urlpatterns = [
    path('', index, name='index')
]