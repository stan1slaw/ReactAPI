class AddAvatarToActor < ActiveRecord::Migration[5.2]
  def change
    add_column :actors, :avatar, :string
  end
end
