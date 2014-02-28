module.exports = function(app) {

    // Home/main
    app.get('/', function(req, res) {
        if(!req.query.id)    {
            res.render('index', { title: 'fuzz.ly', cssFile: 'style.css', query: req.query.id })
        }else   {
            res.render('index', { title: 'fuzz.ly', cssFile: 'style2.css', query: req.query.id })
        }
    })

    app.post('/signup', function(req, res)	{
    	
    	var pg = require('pg');

        var email = req.body.email;
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		  client.query('INSERT INTO interest ("emailaddress","date_added") VALUES (\''+email+'\',now())', function(err, result) {
		    done();
		    if(err) {return console.error(err)
            }else   {
                console.log("no write error");
            };
		    console.log(result.rows);
		  });
		});
    	if(!req.body.id)    {
            res.render('post', { title: 'fuzz.ly', cssFile: 'style.css', query: req.body.id })
        }else   {
            res.render('post', { title: 'fuzz.ly', cssFile: 'style2.css', query: req.body.id })
        }
    })

}