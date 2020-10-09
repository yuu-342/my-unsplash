class ItemSerializer < ActiveModel::Serializer
  belongs_to :category, serializer: CategorySerializer

  attributes :id, :name, :note, :image_url, :category_id
end
