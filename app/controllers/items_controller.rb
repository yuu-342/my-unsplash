class ItemsController < ApplicationController
  def create
    category = Category.find_or_initialize_by(name: item_params[:category])
    category.items.build(name: item_params[:name], note: item_params[:note], image_url: item_params[:image_url])
    category.save

  rescue => e
    pp e.message
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy!
  rescue => e
    Rails.logger.log(e.message)
    # ErrorMessageを含めたjsonを返す
  end

  private

  def item_params
    params.require(:items).permit(:name, :note, :image_url, :category)
  end
end
