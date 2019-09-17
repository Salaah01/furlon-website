# Generated by Django 2.2.5 on 2019-09-17 21:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stores', '0001_initial'),
        ('misc', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='StoreRights',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rights', models.CharField(blank=True, max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='StoreUsers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100)),
                ('status', models.CharField(default='Active', max_length=20)),
                ('rights', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='accounts.StoreRights')),
                ('store_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='stores.Stores')),
                ('user_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CustomerDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address_line_1', models.CharField(blank=True, max_length=128)),
                ('address_line_2', models.CharField(blank=True, max_length=128)),
                ('postcode', models.CharField(blank=True, max_length=10)),
                ('telephone', models.CharField(blank=True, max_length=20)),
                ('status', models.CharField(default='Active', max_length=20)),
                ('verified', models.BooleanField(default=False)),
                ('opt_in', models.BooleanField(default=False)),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='misc.Cities')),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='misc.Countries')),
                ('user_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
