from django.contrib import admin
from .models import Product
# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', )
    search_fields = ('name', 'price',) #Activa un item de busqueda en el campo de busqueda de la interfaz admin
    list_filter = ('price', 'name',)  #Agrega filtros a la interfaz de admin

admin.site.register(Product, ProductAdmin)