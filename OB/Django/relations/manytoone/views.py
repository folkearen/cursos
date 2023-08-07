from django.shortcuts import render
from django.http import HttpResponse
from .models import *

# Create your views here.

def create(request):
    reporter = Reporter.objects.create(first_name='Alan', last_name='Munoz', email='alan.munoz.b@gmail.com')
    article1 = Article.objects.create(headline='Article1', reporter=reporter)
    article2 = Article.objects.create(headline='Article2', reporter=reporter)
    article3 = Article.objects.create(headline='Article3', reporter=reporter)
    
    result = article1.reporter.first_name
    result2 = reporter.article_set.all()
    #Podria hacer consultas con filter
    #result2 = reporter.article_set.filter(article='article1').
    #result2 = reporter.article_set.count() Para saber cuantos articulos tiene.
    return HttpResponse(result2)