writeCode

Write command to

- List collections from a database.
    => show collections  //its gives us all the database which is available in our mongo server
- create a new collection in your country database which you created recently.
=> db.createCollection('muzaffarpur')
Write code to:-

- crate a database named `weather`

=> use weather

- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
<!-- create a capped collection  -->
 ==> db.createCollection('temperature',{capped :true, size :1024, max: 3})
     <!-- insermany in temperature -->
     db.temperature.insertMany([{delhi:33},{pune:32},{patna:20}])
     <!-- cheack  the inserted data -->
  => db.temperature.find()  //to see the result

- create a simple collection named `humidity`
=> db.createCollection('humidity')
- check whether `temperature` collection is capped or not ?
=> db.temperature.isCapped()
- Delete `humidity` collection and then the entire database(weather).
db.humidity.drop()
=> db.weather.remove({})
