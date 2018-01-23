class User < ApplicationRecord
    has_many :children, class_name: "User", foreign_key: :parent_id
    belongs_to :parent, class_name: "User", optional: true
    
    has_many :lists
    has_many :books, through: :lists
    has_many :childrens_lists, through: :children, source: :lists
    # has_many :childrens_books, through: :childrens_lists, source: :books
    
    before_validation :downcase_username
    validates :username, uniqueness: true, presence: true
    validates :password, presence: true
    
    has_secure_password

    # def childrens_books
    #     self.children.map { |child|  child.books }.flatten.uniq
    # end

    def parent?
        parent_id.nil?
    end

    def child?
        !parent?
    end

    private

    def downcase_username
        self.username = username.downcase if username.present?
    end
end
