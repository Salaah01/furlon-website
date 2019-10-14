# Generated by Django 2.2.5 on 2019-09-22 20:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_products_sub_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='features',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='products.Categories'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='features',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]