class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :isbn, :publisher, :thumbnail, :description, :publication_date
end
