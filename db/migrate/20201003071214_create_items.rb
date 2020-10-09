class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.references :category, index: true, foreign_key: true
      t.string :note
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
