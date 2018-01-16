# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
parent = User.find(1)

child1 = User.new
child1.first_name = Faker::Name.first_name
child1.last_name = Faker::Name.last_name
child1.username = 'child1'
child1.password = '123'
child1.account_type = 'Child'
child1.parent_id = parent.id
child1.save

child2 = User.new
child2.first_name = Faker::Name.first_name
child2.last_name = Faker::Name.last_name
child2.username = 'child2'
child2.password = '123'
child2.account_type = 'Child'
child2.parent_id = parent.id
child2.save

10.times do 
    child1.books << Book.create(:title => Faker::Book.title, :author => Faker::Book.author)
    child2.books << Book.create(:title => Faker::Book.title, :author => Faker::Book.author)
end
