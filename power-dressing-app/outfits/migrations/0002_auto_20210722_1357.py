# Generated by Django 3.2.5 on 2021-07-22 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('outfits', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='outfit',
            name='image',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='outfit',
            name='image_1',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='outfit',
            name='image_2',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='outfit',
            name='image_3',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='outfit',
            name='item_1',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='outfit',
            name='item_2',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='outfit',
            name='item_3',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='outfit',
            name='number_of_pieces',
            field=models.PositiveIntegerField(default=None),
        ),
        migrations.AddField(
            model_name='outfit',
            name='price_1',
            field=models.PositiveIntegerField(default=None),
        ),
        migrations.AddField(
            model_name='outfit',
            name='price_2',
            field=models.PositiveIntegerField(default=None),
        ),
        migrations.AddField(
            model_name='outfit',
            name='price_3',
            field=models.PositiveIntegerField(default=None),
        ),
        migrations.AddField(
            model_name='outfit',
            name='quote',
            field=models.CharField(default=None, max_length=150),
        ),
        migrations.AlterField(
            model_name='outfit',
            name='title',
            field=models.CharField(default=None, max_length=50),
        ),
    ]
