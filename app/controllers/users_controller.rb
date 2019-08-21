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
    user = User.new(params.permit(:username,:password))
    if(user.save)
      :ok 
    else 
      render json: {status: "error", code: 4000, message: "This username has already :(" }
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


private

  def user_params
     params.require(:user).permit(:username, :lastname, :firstname, :avatar, :description, :gender)
  end

end
