# Generated by Django 4.2.3 on 2023-08-03 04:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0002_comments_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='date',
            field=models.DateField(auto_now=True, null=True),
        ),
    ]
