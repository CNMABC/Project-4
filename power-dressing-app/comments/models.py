from django.db import models

class Comment(models.Model):
  name = models.TextField(max_length=300)
  text = models.TextField(max_length=300)
  rating_out_of_five = models.PositiveIntegerField(default=None)
  created_at = models.DateTimeField(auto_now_add=True)
  outfit = models.ForeignKey(
        "outfits.Outfit", # this defines the table the relationship is going to be with
        related_name = "comments", #This is what the column will be called in a show lookup
        on_delete = models.CASCADE #This field specifies that we want all comments related to a deleted show to be deleted
    )

