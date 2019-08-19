class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: {message: "user with this username has already"}, length: { in: 3..30 } 
end
