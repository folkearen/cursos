# Generated by Django 4.2.3 on 2023-07-25 05:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('toDoHome', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='importat',
            new_name='important',
        ),
    ]
