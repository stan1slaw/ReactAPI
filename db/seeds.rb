
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') 

star_wars = Film.create(
    name: "Star Wars 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam",
    producer: "Lorem Ipsum", 
    time_create: "2015-12-17",
    avatars: [Rails.root.join("app/assets/images/star_wars.jpg").open, Rails.root.join("app/assets/images/star1.jpg").open, Rails.root.join("app/assets/images/star2.jpg").open, Rails.root.join("app/assets/images/star3.jpeg").open]
    rating: 5
    )
Actor.create(name:"Yoda",years:"1970-12-17",description:"LOrem YODA")
Actor.create(name:"Skywalker",years:"1940-12-17",description:"LOrem Skywalker")

ActorsFilm.create!([
    {actor_id: 1, film_id: 1},
    {actor_id: 2, film_id: 1}
])