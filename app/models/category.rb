class Category < ApplicationRecord
  has_many :items

  attribute :name, :string
  validates :name, presence: true, uniqueness: true
end
