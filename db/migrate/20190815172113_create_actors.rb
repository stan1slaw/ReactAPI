# frozen_string_literal: true

class CreateActors < ActiveRecord::Migration[5.2]
  def change
    create_table :actors do |t|
      t.references :film, foreign_key: true
      t.text :description
      t.string :name
      t.date :years

      t.timestamps
    end
  end
end
