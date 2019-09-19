# frozen_string_literal: true

class AddAvatarToFilms < ActiveRecord::Migration[5.2]
  def change
    add_column :films, :avatars, :json, array: true, default: []
  end
end
