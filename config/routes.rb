Rails.application.routes.draw do
  get 'greeting/', to: 'greeting#index'
  root 'greeting#index'
end
