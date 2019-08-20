class Film < ApplicationRecord
    has_many :actors_films, dependent: :destroy
    has_many :actors, through: :actors_films
    mount_uploaders :avatars, AvatarUploader
end
