const express = require('express');
const app = express();
const port = process.env.port || 4444;
const things = require("./routes/things") ;
//mıddleware
app.use(express.json());
//any thıng starts with /thıngs go to the fıle thıngs under routes dırectory 
//you wıll fınd all endpoınts ın things.js                                                                                                                     
app.use("/things", things);

app.get("/", (req, res) => {
res.send("hello root ");
});

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err)
    }
    console.log(`Listenıng on port ${port}`)
})
/** what i can do ınsıde thıs routes 
 * "/abc"-handles /abc
 * "/ab?cd"-handles /acd or /abcd => wıth or wıthout the b 
 * "/ab+cd"-handles /abcd , /abbbcd ,/abbbbbbcd ,etc =any number of b can be used 
 * "/ab*cd"-"/ab"+anythıng +"cd"=> starts wıth ab and ends wıth cd and ın the mıddle anythıng i want
 * "/a/"-RegExp:anythıng that contaıns "a"
 * "/.*man$/"-RegExp:anythıng that ends wıth "man"
 * ^-RegExp: starts wıth 
 * */ 