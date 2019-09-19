# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  mount_uploader :avatar, UserUploader
  has_many :news, dependent: :destroy
  validates :username, presence: true, uniqueness: { message: 'user with this username has already' }, length: { in: 3..30 }
end
