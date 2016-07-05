module.exports = function (router) {
    router.get('/upload', function(req, res) {
      uploader.get(req, res, function (err,obj) {
            if(!err){
                res.send(JSON.stringify(obj));
            }
      });      
    });
 
    router.post('/upload', function(req, res) {
      uploader.post(req, res, function (error,obj, redirect) {
          if(!error)
          {
            res.send(JSON.stringify(obj)); 
          }
      });      
    });
    
    // the path SHOULD match options.uploadUrl 
    router.delete('/uploaded/files/:name', function(req, res) {
      uploader.delete(req, res, function (err,obj) {
            res.Json({error:err}); 
      });      
    });
    return router;
}