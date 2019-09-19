# frozen_string_literal: true

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

Film.create(
  name: 'Star Wars 9',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam',
  producer: 'Lorem Ipsum',
  time_create: '2015-12-17',
  avatars: [Rails.root.join('app/assets/images/star_wars.jpg').open, Rails.root.join('app/assets/images/star1.jpg').open, Rails.root.join('app/assets/images/star2.jpg').open, Rails.root.join('app/assets/images/star3.jpeg').open],
  rating: 5
)

Film.create(
  name: 'Harry Potter',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam',
  producer: 'Lorem Ipsum',
  time_create: '2011-11-11',
  avatars: [Rails.root.join('app/assets/images/harry1.jpeg').open, Rails.root.join('app/assets/images/harry2.jpeg').open, Rails.root.join('app/assets/images/harry3.jpeg').open],
  rating: 4
)

Actor.create(name: 'Yoda', years: '1970-12-17', description: 'LOrem YODA')
Actor.create(name: 'Skywalker', years: '1940-12-17', description: 'LOrem Skywalker')
Actor.create(name: 'Harry Potter', years: '2001-12-12', description: 'After all this time, Always...', avatar: Rails.root.join('app/assets/images/harry1.jpeg').open)

ActorsFilm.create!([
                     { actor_id: 1, film_id: 1 },
                     { actor_id: 2, film_id: 1 },
                     { actor_id: 3, film_id: 2 }
                   ])
