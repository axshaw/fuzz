module.exports = function(app) {

    // Home/main
    app.get('/', function(req, res) {
        res.render('index', { title: 'fuzz.ly' })
    })

    app.post('/signup', function(req, res)	{
    	res.render('post',{title: 'fuzz.ly' })
    })

}