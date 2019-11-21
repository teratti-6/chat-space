Rails.application.routes.draw do
  devise_for :users
  root to: "groups#index"# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update, :set_group] do
    resources :messages, only: [:index, :create]
  end
end
