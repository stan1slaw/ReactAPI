Rails.application.routes.draw do
 

 
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  scope '/api' do
    resources :tokens, only: [:create]
    resources :users
    resources :films
    resources :actors
    
  end
end
