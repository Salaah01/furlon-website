# Generated by Django 2.2.5 on 2019-09-22 23:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0002_auto_20190917_2320'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stores',
            old_name='nax_delivery_distance',
            new_name='max_delivery_distance',
        ),
    ]