# Generated by Django 4.2.4 on 2023-08-28 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0006_task_task_tag'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prioridad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_prioridad', models.CharField(choices=[('Alta', 'Alta'), ('Media', 'Media'), ('Baja', 'Baja')], max_length=6)),
            ],
        ),
    ]