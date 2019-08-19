class UsersController < ApplicationController
 
  def create
    input = User.new(params.permit(:username, :password))
    if(input.save)
      :ok 
    else 
      render json: {status: "error", code: 4000, message: "This username has already :(" }
  end
end
end
