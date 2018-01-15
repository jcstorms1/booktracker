class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :account_type, :children, :books
end
