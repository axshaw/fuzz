module.exports = function(app) {

    // Home/main
    app.get('/', function(req, res) {
        res.render('index', { title: 'fuzz.ly' })
    })

    app.post('/signup', function(req, res)	{
    	
    	var pg = require('pg');
        
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		  client.query('INSERT INTO fuzzly SET emailAddress="'+email+'"', function(err, result) {
		    done();
		    if(err) return console.error(err);
		    console.log(result.rows);
		  });
		});
    	
    	var email = req.body.name;
    	res.render('post',{title: email })
    })

}