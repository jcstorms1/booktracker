class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.belongs_to :user, index: true
      t.belongs_to :book, index: true

      t.timestamps
    end
  end
end
