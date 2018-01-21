class RemoveFavoriteColumnFromBooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :favorite, :boolean
  end
end
