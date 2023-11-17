from rest_framework import routers
from .api import ProjectsViewSet
router = routers.DefaultRouter()

router.register('api/projects', ProjectsViewSet, 'projects') #!esto crea ruta para ger, post, put, delete
urlpatterns = router.urls
