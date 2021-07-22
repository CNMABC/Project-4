from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Outfit
from .serializers.common import OutfitSerializer
from .serializers.populated import PopulatedOutfitSerializer


class OutfitListView(APIView):

    def get(self, _request):
      outfits = Outfit.objects.all()
      serialized_outfits = PopulatedOutfitSerializer(outfits, many=True)
      return Response(serialized_outfits.data, status=status.HTTP_200_OK)

    def post(self, request):
        outfit_to_add = PopulatedOutfitSerializer(data=request.data)
        if outfit_to_add.is_valid():
          outfit_to_add.save()
          return Response(outfit_to_add.data, status=status.HTTP_201_CREATED)
        return Response(outfit_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class OutfitDetailView(APIView):

    def get_outfit(self, pk):
        try:
            return Outfit.objects.get(pk=pk)
        except Outfit.DoesNotExist:
            raise NotFound(detail="🆘 Can't find that outfit")


    def get(self, _request, pk):
        outfit = self.get_outfit(pk=pk)
        serialized_outfit = PopulatedOutfitSerializer(outfit)
        return Response(serialized_outfit.data, status=status.HTTP_200_OK)

# Delete an outfit
    def delete(self, _request, pk):
        outfit_to_delete = self.get_outfit(pk=pk)
        outfit_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Edit an outfit
    def put(self, request, pk):
      outfit_to_edit = self.get_outfit(pk=pk)
      updated_outfit = OutfitSerializer(outfit_to_edit, data=request.data)
      if updated_outfit.is_valid():
        updated_outfit.save()
        return Response(updated_outfit.data, status=status.HTTP_202_ACCEPTED)
      return Response(updated_outfit.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

