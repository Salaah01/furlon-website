# Generated by Django 2.2.5 on 2019-09-22 20:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_remove_categories_valid_features'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SubCateogires',
            new_name='SubCategories',
        ),
    ]