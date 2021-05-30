# Generated by Django 2.2.5 on 2019-12-24 19:59

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stores', '0001_initial'),
        ('products', '0001_initial'),
        ('misc', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sales',
            fields=[
                ('sale_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('delivery', models.FloatField(default=0)),
                ('asembly', models.FloatField(default=0)),
                ('exVat', models.FloatField(default=0)),
                ('vat', models.FloatField(default=0)),
                ('total', models.FloatField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='products.Products')),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='stores.Stores')),
            ],
            options={
                'verbose_name_plural': 'Sales',
            },
        ),
        migrations.CreateModel(
            name='Invoices',
            fields=[
                ('invoice_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('sale_IDs', models.CharField(max_length=500)),
                ('order_date', models.DateTimeField(default=datetime.datetime.now)),
                ('user', models.CharField(default='guest', max_length=100)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('address_line_1', models.CharField(blank=True, max_length=256)),
                ('address_line_2', models.CharField(blank=True, max_length=256)),
                ('postcode', models.CharField(blank=True, max_length=10)),
                ('telephone', models.CharField(blank=True, max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('expected_delivery', models.DateField()),
                ('actual_delivery', models.DateTimeField(blank=True)),
                ('delivered', models.BooleanField(default=False)),
                ('deliv_time_from', models.TimeField(blank=True)),
                ('deliv_time_to', models.TimeField(blank=True)),
                ('total_delivery', models.FloatField()),
                ('total_assembly', models.FloatField()),
                ('tot_prods_exVat', models.FloatField()),
                ('vat', models.FloatField()),
                ('grand_total', models.FloatField()),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='misc.Cities')),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='misc.Countries')),
            ],
            options={
                'verbose_name_plural': 'Invoices',
            },
        ),
    ]
