class AddAvatarToFilms < ActiveRecord::Migration[5.2]
  def change
    add_column :films, :avatars, :json, array: true, default: []
  end
end
