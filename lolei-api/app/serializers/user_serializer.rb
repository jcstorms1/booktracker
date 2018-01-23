class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :account_type, :books, :children

  def children
    object.children.map do |child|
    child_books = child.lists.map {|l| {read_at: l.created_at, favorite: l.favorite, list_id: l.id}.merge(l.book.attributes)}
    
    child.attributes.merge({books: child_books})

    end
  end
end

