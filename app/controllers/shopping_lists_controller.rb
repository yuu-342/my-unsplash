class ShoppingListsController < ApplicationController
  def create
    user = User.last
    shopping_list = user.shopping_lists.build(name: shopping_list_params[:name])
    shopping_list_params[:items_attributes].each do |item_id|
      shopping_list.items.build(id: item_id)
    end

    shopping_list.save!
  end

  def shopping_list_params
    params.require(:shopping_list).permit(:name, items_attributes: :id)
  end
end
