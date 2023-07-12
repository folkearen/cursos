from django.urls import path
from . import views

app_name = 'polls'
urlpatterns = [
    #polls/
    path("", views.IndexView.as_view(), name='index'),
    #polls/1/
    path("<int:pk>/", views.DetailView.as_view(), name='detail'),
    #polls/1/resolve <int:question_id> es id que se pasa por parametro, entonce me permite entregar un parametro al url
    path("<int:pk/results/", views.ResultView.as_view(), name='results'),
    #polls/1/vote
    path("<int:question_id>/votes/", views.vote, name='vote')
]