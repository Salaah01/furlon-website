# Generated by Django 2.2.5 on 2019-10-27 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0023_auto_20191027_2148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='delivery_price',
            field=models.FloatField(default=-1),
        ),
    ]