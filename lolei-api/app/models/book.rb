class Book < ApplicationRecord
    belongs_to :list
    has_many :users, through: :list
end
