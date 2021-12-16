writeCode

Write code to:-

- create a database named `sports`.
 => use sports

- list all databases present in local mongod server.

=> show dbs

- create 3 collections named `cricket`, `football`, `TT` in sports databse.

=> db.createCollections('cricket')
   <!-- cheack collection -->
   <!-- show collections  -->

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.

- list all collections in sports database.

show collections
<!-- TT
cricket
football -->

- rename `TT` collection to `tennis`.

<!-- db.TT.renameCollection('tennise') -->

- create a capped collection called `khokho` which should have max 3 documents.
<!-- db.createCollection('khokho',{capped:true, size: 3342,max :3}) -->

  Try inserting more than 3 and see what happens?
db.khokho.count()
3

- check whether a collection is capped or not?
<!-- db.khokho.isCapped()
true -->

- drop all documents from `football` collection.
 <!-- db.football.remove({}) -->

- delete cricket collection completely.
<!-- db.cricket.drop() -->

- delete sports database.

<!-- db.dropDatabase() -->

- check which database you are connected to ?
<!-- db -->
- connect to test database
<!-- use test -->