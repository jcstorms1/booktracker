class ListSerializer < ActiveModel::Serializer
  attributes :user_id, :book_id, :created_at
end
