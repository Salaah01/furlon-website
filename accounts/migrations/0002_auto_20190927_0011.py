# Generated by Django 2.2.5 on 2019-09-26 23:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='customerdetails',
            options={'verbose_name_plural': 'Customer Details'},
        ),
        migrations.AlterModelOptions(
            name='storerights',
            options={'verbose_name_plural': 'Store Rights'},
        ),
        migrations.AlterModelOptions(
            name='storeusers',
            options={'verbose_name_plural': 'Store Users'},
        ),
    ]