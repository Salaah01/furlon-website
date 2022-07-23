# Generated by Django 2.2.5 on 2019-12-24 19:59

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('misc', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Stores',
            fields=[
                ('store_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=256)),
                ('address_line_1', models.CharField(blank=True, max_length=256)),
                ('address_line_2', models.CharField(blank=True, max_length=256)),
                ('postcode', models.CharField(blank=True, max_length=10)),
                ('telephone', models.CharField(blank=True, max_length=20)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('website', models.URLField(blank=True)),
                ('rating', models.FloatField(blank=True, null=True)),
                ('ratings', models.IntegerField(default=0)),
                ('longitude', models.FloatField(blank=True)),
                ('latitude', models.FloatField(blank=True)),
                ('max_delivery_distance', models.CharField(default='5', max_length=64)),
                ('std_delivery_price', models.FloatField(default=0.0)),
                ('description', models.CharField(blank=True, max_length=2048)),
                ('established', models.DateField(blank=True)),
                ('join_date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('last_activity', models.DateTimeField(blank=True)),
                ('status', models.CharField(default='Active', max_length=16)),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='misc.Cities')),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='misc.Countries')),
            ],
            options={
                'verbose_name_plural': 'Stores',
            },
        ),
        migrations.CreateModel(
            name='StoreReviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.FloatField()),
                ('comments', models.CharField(blank=True, max_length=2048)),
                ('review_date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stores.Stores')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Store Reviews',
            },
        ),
        migrations.CreateModel(
            name='Deliveries',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=128)),
                ('min_dist', models.CharField(default='0', max_length=8)),
                ('max_dist', models.CharField(max_length=8)),
                ('min_total', models.FloatField()),
                ('max_total', models.FloatField()),
                ('price', models.FloatField()),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stores.Stores')),
            ],
            options={
                'verbose_name_plural': 'Deliveries',
            },
        ),
    ]