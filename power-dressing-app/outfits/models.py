from django.db import models

# Create your models here.

class Outfit(models.Model):
    title = models.CharField(max_length=50, default=None)
    quote = models.CharField(max_length=150, default=None)
    detail = models.CharField(max_length=1000, blank=True)
    image = models.CharField(max_length=1000, default=None)
    number_of_pieces = models.PositiveIntegerField(default=None)
    item_1 = models.CharField(max_length=100, default=None)
    image_1 = models.CharField(max_length=1000, default=None)
    price_1 = models.PositiveIntegerField(default=None)
    description = models.CharField(max_length=1000, blank=True)
    category = models.ManyToManyField(
        "categories.Category",
        related_name="categories"
    )


    def __str__(self):
        return f"{self.title} - {self.item_1}"