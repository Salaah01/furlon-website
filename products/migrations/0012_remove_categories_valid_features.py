# Generated by Django 2.2.5 on 2019-09-22 20:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20190922_2124'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categories',
            name='valid_features',
        ),
    ]