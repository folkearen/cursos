# Generated by Django 4.2.3 on 2023-08-14 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('creation_date', models.DateField(auto_now_add=True)),
                ('deadline', models.DateField()),
                ('priority', models.IntegerField(default=3)),
            ],
        ),
    ]