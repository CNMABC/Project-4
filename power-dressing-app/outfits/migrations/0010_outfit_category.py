# Generated by Django 3.2.5 on 2021-07-23 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
        ('outfits', '0009_alter_outfit_detail'),
    ]

    operations = [
        migrations.AddField(
            model_name='outfit',
            name='category',
            field=models.ManyToManyField(related_name='categories', to='categories.Category'),
        ),
    ]
