ActiveAdmin.register User do
  permit_params :username, :avatar, :firstname, :lastname, :description, :gender

end
