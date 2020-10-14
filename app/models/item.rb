class Item < ApplicationRecord
  belongs_to :category

  attribute :name, :string
  attribute :note, :string
  attribute :image_url, :string

  validates :name, :image_url, presence: true
end
