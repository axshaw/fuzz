module.exports = function(app) {

    // Home/main
    app.get('/', function(req, res) {
        res.render('index', { title: 'fuzz.ly' })
    })

    app.post('/signup', function(req, res)	{
    	
    	var pg = require('pg');

        var email = req.body.email;
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
            console.log('INSERT INTO interest (emailaddress) VALUES ("'+email+'")');
		  client.query('INSERT INTO interest (emailaddress) VALUES ("'+email+'")', function(err, result) {
		    done();
		    if(err) return console.error(err);
		    console.log(result.rows);
		  });
		});
    	
    	res.render('post',{title: email })
    })

}