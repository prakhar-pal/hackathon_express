var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

module.exports = (router) => {
	var token = null;
	
router.post('/callback',(req,res)=>{
    console.log('Params: '+JSON.stringify(req.body))
    var options = {
        url: 'https://www.linkedin.com/oauth/v2/accessToken?format=json',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
        },
        form:{
        'grant_type':'authorization_code',
        'code':req.body.code,
        'redirect_uri':'http://localhost:4200/demo',
        'client_id':'816x7fwlimaa7s',
        'client_secret':'lcb3uhIEsPQ0PTOd'
        },
        json:true
    }
    request(options,(err,response,body)=>{
        console.log("Token Body: "+JSON.stringify(body));
        console.log();
        console.log("Token Response: "+JSON.stringify(response));
        console.log();


        if(body.error){
            res.json(
                {
                success:false,
                error:body.error,
                error_description:response.body.access_token
            });
        }
        else{
            token = body.access_token;
            console.log("Access Token: "+token);
            console.log();
            //res.json({success:true,access_token:body.access_token});
            console.log('Getting user info...');
            console.log();

            var userOptions = {
                url:'https://api.linkedin.com/v1/people/~:(firstName,lastName,email-address)?format=json',
                method: 'GET',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'Accept-Charset': 'utf-8',
                    'Authorization' : 'Bearer '+token
                },
                json:true
            }
            console.log(userOptions.headers);
            request(userOptions,(err,response,body)=>{
                console.log("User RESPONSE: "+JSON.stringify(response));
                console.log();
                console.log("User BODY: "+JSON.stringify(body));
                console.log();
                res.json(body);
            });
        }
    });

});


router.get('/',(req,res)=>{
    var options = {
        'grant-type':'authorization_code',
        'code':req.body.code,
        'redirect_uri':'http://localhost:4200/demo',
        'client_id':'816x7fwlimaa7s',
        'client_secret':'lcb3uhIEsPQ0PTOd'
    }
    request(options,(err,res,body)=>{
        console.log("Body: "+JSON.stringify(body));
        console.log("Response: "+res);
    });

})

	
	
	  return router;
}
