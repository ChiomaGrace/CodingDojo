# Generated by Django 3.0.6 on 2020-05-19 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booksAuthorsApp', '0004_author_books'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='description',
            field=models.TextField(default='Description of the Book Goes Here'),
        ),
    ]