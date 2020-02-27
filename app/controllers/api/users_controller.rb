class Api::UsersController < ApplicationController

  skip_before_action :verify_authenticity_token
  
  def create
    @user = User.new(user_params)
    @user.balance = 5000
    if @user.save
      login!(@user)
      render 'api/users/portfolio'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    new_balance = @user.purchase_stock(params['trade']['price'], params['trade']['quantity'])
    @user.balance = new_balance
    if (@user && @user.save)
      render :show
    else
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email, :price, :quantity)
  end

end
