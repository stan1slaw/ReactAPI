ActiveAdmin.register Film do

  permit_params :name, :description, :time_create, :producer, :actor_id, :avatars, :rating

  form(:html => { :multipart => true }) do |f|
    f.inputs "Film Details" do
      f.input :name
      f.input :description
      f.input :producer
      f.input :rating
      f.input :avatars,multiple: true, :as => :file
      f.actions
    end
  end
end


    
   
  
