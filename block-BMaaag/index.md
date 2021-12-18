writeCode

Write code to:-

- create a database named `mountains`
<!-- use maountains -->
- a collection inside that database named `himalayas`
<!-- show collections -->
<!-- db.createCollection('himalayas') -->
- insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`
db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'})
<!-- find the document is inserted or not without any argument  -->
<!-- db.himalayas.find() -->
- insert multiple document using insertMany command
- find all documents from mountains
<!-- db.himalays.find() -->
- find a single document using name
<!-- db.himalayas.find({ name: 'Lesser Himalayas'}) -->
<!-- also use  -->
db.himalayas.findOne({ name: 'Lesser Himalayas'})
