class Api::UsersController < ApplicationController
  
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

  def update
    @user = User.find(params[:id])
    new_balance = @user.balance + user_params['balance']
    @user.balance = new_balance
    if (@user && @user.save)
      render :show
    else
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email, :balance)
  end

end
