class CategoryController < ApplicationController
  def index
    categories = Category.includes(:items)
    render json: categories, each_serializer: CategorySerializer
  end
end
