# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {
    first_name: "Ayman", last_name: "Fakri", email: "ayman@test.com", password: "123",
  },
])

Checkin.create([
  user_id: 1, checkedin: false, days: ["Monday", "Friday"], window: 10, delay: 20,
])
