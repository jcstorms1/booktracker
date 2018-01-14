class User < ApplicationRecord
    has_many :children, class_name: "User"
    belongs_to :parent, class_name: "User", optional: true
    has_many :lists
    has_many :books, through: :lists

    validates :email, uniqueness: true, presence: true
    
    has_secure_password
end
