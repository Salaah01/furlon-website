# Generated by Django 2.2.5 on 2019-09-29 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0017_auto_20190929_1822'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image_1',
            field=models.ImageField(blank=True, upload_to='products/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='image_2',
            field=models.ImageField(blank=True, upload_to='products/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='image_3',
            field=models.ImageField(blank=True, upload_to='products/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='image_4',
            field=models.ImageField(blank=True, upload_to='products/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='image_5',
            field=models.ImageField(blank=True, upload_to='products/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='image_6',
            field=models.ImageField(blank=True, upload_to='products/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='showcase_image',
            field=models.ImageField(upload_to='products/<django.db.models.fields.BigAutoField>/'),
        ),
    ]