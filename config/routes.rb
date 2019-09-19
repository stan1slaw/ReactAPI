# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :tokens, only: [:create]
    resources :users do
      member do
        get 'preview'
      end
    end
    get 'user(/:id)', to: 'users#display'
    resources :films
    resources :actors
    resources :news
  end
end
