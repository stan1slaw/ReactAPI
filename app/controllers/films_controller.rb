class FilmsController < ApplicationController
  before_action :set_film, only: [:show, :update, :destroy]

  # GET /films
  def index
    @films = Film.select("id,name,time_create,avatars,description, producer").all
    render json: @films
  end

  # GET /films/1
  def show
    render json: @film.to_json(:include => { :actors => { :only => [:id, :name, :avatar] }})
    end

  # POST /films
  def create
    @film = Film.new(film_params)

    if @film.save
      render json: @film, status: :created, location: @film
    else
      render json: @film.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /films/1
  def update
    if @film.update(film_params)
      render json: @film
    else
      render json: @film.errors, status: :unprocessable_entity
    end
  end

  # DELETE /films/1
  def destroy
    @film.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_film
      @film = Film.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def film_params
      params.require(:film).permit(:name, :description, :producer, :time_create)
    end
end
