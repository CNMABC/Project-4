from comments.serializers.common import CommentSerializer
from categories.serializers.common import CategorySerializer
from .common import OutfitSerializer

class PopulatedOutfitSerializer(OutfitSerializer): # pass Show object through
    comments = CommentSerializer(many=True) # adding a field to the Show object called comments
    category = CategorySerializer(many=True) # adding a field to the Show object called genres
