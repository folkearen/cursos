from .models import Project
from rest_framework  import viewsets, permissions
from .serializers import ProjectSerializer

class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [permissions.AllowAny] #!Quien(cliente) puede consultar mi servidor, en este punto todos AllowAny, se puede cambiar por ejemplo a quien este autenticado
    serializer_class = ProjectSerializer