class Api::TradesController < ApplicationController

  def create
    @trade = Trade.new(trade_params)
    @trade.purchase_date = Date.new
    @trade.user_id = current_user.id
    if @trade.save
      render 'api/trades/show'
    else
      render json: @trade.errors.full_messages, status: 422
    end
  end

  def show
    @trade = trade.find(params[:id])
    if @trade
      render :show
    else
      render json: ["trade does not exist"], status: 404
    end
  end

  def index
    @trades = Trade.where(user_id: params[:id])
  end

  private

  def trade_params
    params.require(:trade).permit(:quantity, :price, :ticker)
  end

end
