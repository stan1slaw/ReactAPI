ActiveAdmin.register Actor do
    permit_params :name, :description, :years, :film_id, :avatar
 
  
end
