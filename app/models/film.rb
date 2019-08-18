class Film < ApplicationRecord
    has_many :actors_films, dependent: :destroy
    has_many :actors, through: :actors_films
    mount_uploader :avatars, AvatarUploader
end
