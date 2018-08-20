exports.handler = (event, context, callback) => {

	const fs = require('fs');

        // inbound event
        //const event = process.argv[2];
        // const cert = fs.readFileSync(__dirname +  "/cert.pem").toString();
        console.log("CERTDATA: " + event.body.toString());
        // console.log("CERTDATA: " + cert);
        
        var certDecoded = null;
        try {
                // Decode the certificate using the request body
                certDecoded = decode(event.body.toString());
                // certDecoded = decode(cert);
        } catch (error) {
                console.log(error);
        }

	var response = null;
        if (certDecoded) {
                response = {
                        statusCode: 200,
                        body: JSON.stringify(certDecoded),
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                };    
        } else {
                response = {
                        statusCode: 500,
                        body: JSON.stringify({"error":"Unable to decode certificate"}),
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                };  
        }

	console.log(response);

        // Return the resopnse payload
        callback(null, response);

}

function decode(pem) {

        const x509 = require('x509');
        return x509.parseCert(pem);

}