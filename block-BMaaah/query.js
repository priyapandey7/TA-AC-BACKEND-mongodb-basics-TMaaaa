db.articles.insertMany(articles)
db.articles.findOne({"author.name":"Dwight Merriman"})
db.articles.update({},{$rename :{details:"description"}},{multi:true})
db.articles.update({_id: '1'},{$set :{title :"update with javaScript"}})

db.articles.update({title :"update with javaScript"},{$set:{"author.name":"xyz"}})

db.articles.update({title :"update with javaScript"},{$push:{tags:"node"}})

db.articles.update({title: 'HTML'},{$inc :{"author.age":5}})