# Generated by Django 2.2.5 on 2020-01-23 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sales',
            old_name='asembly',
            new_name='assembly',
        ),
        migrations.AddField(
            model_name='sales',
            name='transaction_ref',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
