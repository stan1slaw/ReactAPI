# frozen_string_literal: true

class AddRatingToFilm < ActiveRecord::Migration[5.2]
  def change
    add_column :films, :rating, :integer
  end
end
