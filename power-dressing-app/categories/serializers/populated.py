from outfits.serializers.common import OutfitSerializer
from .common import CategorySerializer

class PopulatedCategorySerializer(CategorySerializer):
    categories = OutfitSerializer(many=True)