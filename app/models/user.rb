class User < ApplicationRecord
  has_many :group_mambers
  has_many :groups, through: :group_mamber
  has_many :comments
end
