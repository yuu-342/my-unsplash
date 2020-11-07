class Item < ApplicationRecord
  belongs_to :category
  belongs_to :shopping_list

  attribute :name, :string
  attribute :note, :string
  attribute :image_url, :string

  validates :name, :image_url, presence: true
end
