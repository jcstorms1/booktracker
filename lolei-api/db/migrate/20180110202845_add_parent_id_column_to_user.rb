class AddParentIdColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :parent_id, :integer
  end
end
