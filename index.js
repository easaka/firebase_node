const { urlencoded } = require('express');
const express = require('express')
const app = express()

const admin = require('firebase-admin')
const credentials = require('./key.json')


admin.initializeApp({
    credential: admin.credential.cert(credentials)
});



app.use(express.json())
app.use(urlencoded({extended: true}))


app.post('/create',async(req,res)=> {
try {
    console.log(req.body);
    const id = req.body.email;
    const userJson = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    const response = db.collection("users").doc(id).set(userJson)
    res.send({msg:"Successful"})
} catch (error) {
    res.send(error)
}
})

const db = admin.firestore();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
