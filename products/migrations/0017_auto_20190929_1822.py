# Generated by Django 2.2.5 on 2019-09-29 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0016_auto_20190929_1819'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='showcase_image',
            field=models.ImageField(upload_to='<django.db.models.fields.related.ForeignKey>/'),
        ),
    ]