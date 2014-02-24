module.exports = function(app) {

    // Home/main
    app.get('/', function(req, res) {
        res.render('index', { title: 'fuzz.ly' })
    })

    app.post('/signup', function(req, res)	{
    	
    	var pg = require('pg');

        var email = req.body.name;
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		  client.query('INSERT INTO interest (emailaddress,date_added) VALUES ("'+email+'",now)', function(err, result) {
		    done();
		    if(err) return console.error(err);
		    console.log(result.rows);
		  });
		});
    	
    	res.render('post',{title: email })
    })

}