class UserSerializer < ActiveModel::Serializer
  @@arr = []

  attributes :id, :first_name, :last_name, :username, :password_digest, :account_type, :children

 

  def children
    object.children.map do |child|
    child_books = child.lists.map {|l| {read_at: l.created_at, favorite: l.favorite, list_id: l.id}.merge(l.book.attributes)}
    
    child.attributes.merge({books: child_books})

    end
    # object.childrens_lists.map { |list| {read_at: list.created_at}.merge(list.book.attributes) }
    # self.books.map { |book|  book.to_json.merge({read_at: book.}) }
  end
end
