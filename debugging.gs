function deleteDatabase() {
   var results = db.query({ }),
       ids = [ ];
   while (results.hasNext()) {
       ids = ids.concat(results.next());  
   }
   db.removeBatch(ids, false);
}

function showDatabase() {
   var results = db.query({ }),
       ids = [ ];
   while (results.hasNext()) {
       Logger.log(results.next());  
   }
}