API

/api/products GET
response: {products: [{}, {}, {}...]}

1. come up with group name.
2. think about what you want to sell.
3. what back end routes are required
4. what tables are required:
   -products
   -users
   -orders
   -what other table might we need (think about the relationship between products and orders)
5. seed database with tables and junk data (orders, products, etc..)
   - create a new database (in psql shell)
   -
6. use branches.
   - what is a branch? (a copy of master that exists independent of master)
   - you will use a branch to write new code and then push that branch to github
   - how make new branch (git checkout -b "name of branch")

pull-requests - your pulling new code from a branch into master

will this produce a conflict - from anon ?
