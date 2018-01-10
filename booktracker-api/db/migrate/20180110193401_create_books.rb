class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.float :isbn
      t.string :publisher
      t.string :thumbnail
      t.string :description
      t.string :publication_date

      t.timestamps
    end
  end
end
