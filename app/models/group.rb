class Group < ApplicationRecord
  has_many :group_mambers
  has_many :users, through: :group_mamber
  has_many :comments
end
