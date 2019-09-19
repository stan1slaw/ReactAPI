# frozen_string_literal: true

class AddAvatarToActor < ActiveRecord::Migration[5.2]
  def change
    add_column :actors, :avatar, :string
  end
end
