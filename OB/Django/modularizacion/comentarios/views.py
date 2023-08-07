from django.shortcuts import render
from django.http import HttpResponse
from .models import Comment

def test(request):
    return HttpResponse('olis')

def create(request):
    # comment = Comment(n ame='Alan', score=5, comment='Esto es un comentario')
    # comment.save()
    comment = Comment.objects.create(name='Tamara')
    return HttpResponse('create')
# Create your views here.

def delete(request):
    # comment = Comment.objects.get(id=1)
    # comment.delete()
    Comment.objects.filter(id=2).delete()
    return HttpResponse('Delete')