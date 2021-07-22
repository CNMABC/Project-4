from django.urls import path
from django.urls import path
from .views import OutfitListView, OutfitDetailView


urlpatterns = [
    path('', OutfitListView.as_view()),
    path('<int:pk>/', OutfitDetailView.as_view())
]