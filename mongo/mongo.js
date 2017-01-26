"use strict";

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017/mongotest";

MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Connected successfully to the database");

    db.close();
});