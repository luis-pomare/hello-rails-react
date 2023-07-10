Rails.application.routes.draw do
  get 'greeting/', to: 'greeting#index'
  get 'greeting/api', to: 'greeting#greetings_endpoint'
  root 'greeting#index'
end
