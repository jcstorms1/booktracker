class UserChildSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :username, :password_digest, :account_type, :books
  
    def books
      object.lists.map{|l| {read_at: l.created_at, favorite: l.favorite, list_id: l.id}.merge(l.book.attributes)}
    end
end