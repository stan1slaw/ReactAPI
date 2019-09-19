class NewsController < ApplicationController
  before_action :choose_news, only: %i[destroy update]

  def index
    render json: New.all, include: { user: { only: [:username] } }
  end

  def create
    news = New.new(params.permit(:title, :user_id))
    if news.save
      render json: :ok
    else
      render json: :error
     end
  end

  def destroy
    if @news.destroy
      render json: :ok
    else
      render json: :error
    end
  end

  def update
    if @news.update(news_permit)
      render json: { status: 'success', code: 200, message: 'News updated' }
    else
      render json: { status: 'error', code: 3000, message: 'You got error' }
    end
  end

  private

  def news_permit
    params.require(:news).permit(:id, :title, :user_id)
  end
  
  def choose_news
    @news = New.find(params[:id])
  end
end
