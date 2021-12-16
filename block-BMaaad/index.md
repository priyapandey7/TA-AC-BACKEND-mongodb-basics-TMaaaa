writeCode

Write command to

- List collections from a database.
    => show dbs  //its gives us all the database which is available in our mongo server
- create a new collection in your country database which you created recently.
=> db.createCollection('muzaffarpur')
Write code to:-

- crate a database named `weather`

=> use weather

- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
<!-- create a capped collection  -->
 ==> db.temperature.insert({ temperature: '40',temperature2: '43',temperature3: '40'})

=> db.temperature.find()  //to see the result

- create a simple collection named `humidity`
=> use humidity 
- check whether `temperature` collection is capped or not ?
- Delete `humidity` collection and then the entire database(weather).

=> db.weather.remove({})
