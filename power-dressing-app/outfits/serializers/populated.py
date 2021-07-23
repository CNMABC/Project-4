from comments.serializers.common import CommentSerializer
from categories.serializers.common import CategorySerializer
from .common import OutfitSerializer

class PopulatedOutfitSerializer(OutfitSerializer): 
    comments = CommentSerializer(many=True) 
    category = CategorySerializer(many=True) 