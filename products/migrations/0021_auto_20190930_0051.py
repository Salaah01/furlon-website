# Generated by Django 2.2.5 on 2019-09-29 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0020_auto_20190929_1841'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='main_color',
            new_name='main_colour',
        ),
        migrations.AlterField(
            model_name='products',
            name='showcase_image',
            field=models.ImageField(upload_to='products/'),
        ),
    ]
