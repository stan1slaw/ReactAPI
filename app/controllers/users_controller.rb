class UsersController < ApplicationController
  
  def index
    @users = User.all
    render json: @users
  end
  
  def create
    input = User.new(params.permit(:username, :password))
    if(input.save)
      :ok 
    else 
      render json: {status: "error", code: 4000, message: "This username has already :(" }
  end
end
end
