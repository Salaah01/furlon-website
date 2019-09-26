# Generated by Django 2.2.5 on 2019-09-26 23:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0014_auto_20190926_2156'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='categories',
            options={'verbose_name_plural': 'Categories'},
        ),
        migrations.AlterModelOptions(
            name='colourfamilies',
            options={'verbose_name_plural': 'Colour Families'},
        ),
        migrations.AlterModelOptions(
            name='colours',
            options={'verbose_name_plural': 'Colours'},
        ),
        migrations.AlterModelOptions(
            name='features',
            options={'verbose_name_plural': 'Features'},
        ),
        migrations.AlterModelOptions(
            name='productcolourvars',
            options={'verbose_name_plural': 'Related Colour Variations'},
        ),
        migrations.AlterModelOptions(
            name='productreviews',
            options={'verbose_name_plural': 'Product Reviews'},
        ),
        migrations.AlterModelOptions(
            name='products',
            options={'verbose_name_plural': 'Products'},
        ),
        migrations.AlterModelOptions(
            name='relatedproductvars',
            options={'verbose_name_plural': 'Related Product Variations'},
        ),
        migrations.AlterModelOptions(
            name='rooms',
            options={'verbose_name_plural': 'Rooms'},
        ),
        migrations.AlterModelOptions(
            name='subcategories',
            options={'verbose_name_plural': 'Sub Categories'},
        ),
    ]
