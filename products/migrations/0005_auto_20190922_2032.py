# Generated by Django 2.2.5 on 2019-09-22 19:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20190922_1933'),
    ]

    operations = [
        migrations.CreateModel(
            name='ColourFamilies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='colours',
            name='family',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='products.ColourFamilies'),
            preserve_default=False,
        ),
    ]
