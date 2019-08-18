class CreateFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :films do |t|
      t.string :name
      t.text :description
      t.string :producer
      t.date :time_create

      t.timestamps
    end
  end
end
