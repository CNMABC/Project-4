# Generated by Django 3.2.5 on 2021-07-22 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('outfits', '0006_auto_20210722_1635'),
    ]

    operations = [
        migrations.AddField(
            model_name='outfit',
            name='image_3',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='outfit',
            name='item_3',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='outfit',
            name='price_3',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
