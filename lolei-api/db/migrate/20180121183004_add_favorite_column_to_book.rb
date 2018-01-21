class AddFavoriteColumnToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :favorite, :boolean, :default => false
  end
end
