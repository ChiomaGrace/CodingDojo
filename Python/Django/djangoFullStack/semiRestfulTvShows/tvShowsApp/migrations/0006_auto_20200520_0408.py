# Generated by Django 3.0.6 on 2020-05-20 04:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tvShowsApp', '0005_auto_20200520_0404'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='releaseDate',
            field=models.DateTimeField(),
        ),
    ]