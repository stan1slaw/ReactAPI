# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.all
    render json: user
  end

  def create
    user = User.new(params.permit(:username, :password))
    if user.save
      :ok
    else
      render json: { status: 'error', code: 4000, message: 'this username has already :(' }
  end
end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  def preview
    @user = User.find(params[:id])
    render json: @user
  end

  def display
    @user = User.find(params[:id])
    render json: @user
  end

  def favorites
    @user = User.find(params[:id])
    @film = Film.find(params[:film_id])
    render json: @film
  end

  private

  def user_params
    params.require(:user).permit(:username, :lastname, :firstname, :avatar, :description, :gender)
  end
end
