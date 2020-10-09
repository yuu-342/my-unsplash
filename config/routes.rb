Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :items, only: %i(create destroy)
  resources :category, only: %i(index)
end
