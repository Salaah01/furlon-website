# Generated by Django 2.2.5 on 2019-12-26 20:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20191226_2035'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='linkedproducts',
            name='store',
        ),
    ]
