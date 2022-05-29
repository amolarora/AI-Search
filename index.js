const express = require("express");
const cors = require('cors');

const server = express();
server.use(cors());

server.listen('8989', () => {
    console.log("listening to port 8989");
})


server.get("/search/:query", (req, res) => {
    let query = req.params.query;
    
    const filter = require("./filter.js");
    query = filter(query);

    const DiscoveryV1 = require('ibm-watson/discovery/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');


    const discovery = new DiscoveryV1({
        version: '2019-04-30',
        authenticator: new IamAuthenticator({
            apikey: '5WDEnd72Q159ItfkApYl0eWIHDU4_u5NiteQaY3Fr3Ra',
        }),
        serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/eba7f2d1-3f40-49e7-bdd7-111d72ed7b01',
    });

    const queryParams = {
        environmentId: 'c7d984a9-5349-4128-84c1-3499ddcfc41b',
        collectionId: 'df517c4b-eb2f-4488-bc95-dba626361a39',
        naturalLanguageQuery: query
        //naturalLanguageQuery: 'Do you cover personal property if my car is lost or damaged?'
    };

    discovery.query(queryParams)
        .then(queryResponse => {
            const data = JSON.stringify(queryResponse, ["result","results","text"], 2);
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log('error:', err);
            return "999";
        });
})