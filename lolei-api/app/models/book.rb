class Book < ApplicationRecord
    has_many :lists
    has_many :users, through: :list
end
