# Generated by Django 4.2.3 on 2023-07-09 04:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='chois',
            new_name='Choice',
        ),
    ]
