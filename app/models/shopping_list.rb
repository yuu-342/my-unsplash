class ShoppingList < ApplicationRecord
  has_many :items, through: :shopping_list_items
  belongs_to :user

  attribute :name, :string
  validates :name, presence: true, length: 20
end
