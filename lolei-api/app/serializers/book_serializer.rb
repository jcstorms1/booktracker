class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :isbn, :thumbnail, :favorite
end