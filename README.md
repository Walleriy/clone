# walleriy-JS2020Q3
Private repository for @walleriy
git push heroku clone:main
Oeq6epFvyMC1ziIq
const url = 'mongodb+srv://dbUser:Oeq6epFvyMC1ziIq@cluster0.xet16.mongodb.net/Market?retryWrites=true&w=majority'

PostGreSql
npm i --save pg knex

heroku addons:create heroku-postgresql:hobby-dev
create db on heroku. Will get DATABASE_URL, which use 
const url = process.env.DATABASE_URL
pg:push postgresql://postres:password@localhost/db_name DATABASE_URL(context)
Copy data from local to heroku