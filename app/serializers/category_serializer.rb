class CategorySerializer < ActiveModel::Serializer
  has_many :items,  serializer: ItemSerializer

  attributes :id, :name
end
