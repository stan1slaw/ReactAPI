# frozen_string_literal: true

ActiveAdmin.register Film do
  permit_params :name, :description, :time_create, :producer, :actor_id, :rating, avatars: []

  form html: { multipart: true } do |f|
    f.inputs  do
      f.input :name
      f.input :description
      f.input :time_create
      f.input :rating
      f.input :producer
      f.input :avatars, as: :file, input_html: { multiple: true }
    end
    f.actions
  end
end
