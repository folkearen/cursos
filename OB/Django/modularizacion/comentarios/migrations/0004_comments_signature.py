# Generated by Django 4.2.3 on 2023-08-03 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0003_alter_comments_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='signature',
            field=models.CharField(default='firma', max_length=100),
        ),
    ]
