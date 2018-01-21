class AddFavoriteColumnToLists < ActiveRecord::Migration[5.1]
  def change
    add_column :lists, :favorite, :boolean, :default => false
  end
end
