const mongodb = require('mongodb')

let url = "mongodb://localhost:27017/";
mongodb.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("App");
  dbo.collection("Ads").aggregate([{
    $lookup: {
      from: 'Users',
      localField: 'uploader',
      foreignField: '_id',
      as: 'user_info'
    }
  },
  
  { $project : { 'user_info.saves': 0,'user_info.age': 0,'user_info.join at': 0 }}

  ]

  ).toArray(function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result[0]));
    db.close();
  });
});
