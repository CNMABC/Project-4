# Generated by Django 3.2.5 on 2021-07-22 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('outfits', '0004_auto_20210722_1627'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='outfit',
            name='image_2',
        ),
        migrations.RemoveField(
            model_name='outfit',
            name='image_3',
        ),
        migrations.RemoveField(
            model_name='outfit',
            name='item_3',
        ),
        migrations.RemoveField(
            model_name='outfit',
            name='price_2',
        ),
        migrations.RemoveField(
            model_name='outfit',
            name='price_3',
        ),
        migrations.AlterField(
            model_name='outfit',
            name='item_2',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
