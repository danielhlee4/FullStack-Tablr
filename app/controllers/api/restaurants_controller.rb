class Api::RestaurantsController < ApplicationController
  # wrap_parameters include: Restaurant.attribute_names + ['price_range', 'website_url']

  def index
    @restaurants = Restaurant.all
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  # private

  # def restaurant_params
  #   params.require(:restaurant).permit(:name, :description, :cuisine, :expense, :price_range, :neighborhood, :address, :phone, :website_url)
  # end
end