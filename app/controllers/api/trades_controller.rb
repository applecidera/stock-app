class TradesController < ApplicationController

  def create
    @trade = Trade.new(trade_params)
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
    @trades = Trade.all
    if @trades
      render :index
    else
      render json: ["no trades exist"], status: 404
    end
  end

  private

  def trade_params
    params.require(:trade).permit(:date, :quantity, :price)
  end

end
