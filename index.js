const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const QUANTIDADE_IMPORTANTES_QUERY ="select nome from %s;";


app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'cadu',
    password : 'ka323212',
    database : 'tarefas',
});
connection.connect(err => {
    if(err){
        console.log(err);
    }
} );

app.listen(4000,() => {
    console.log("listening to port 4000")
});

app.get("/",(req,res) => {
    res.send("its working")
});
//Triade
app.get("/importantes",(req,res) => {
    connection.query(QUANTIDADE_IMPORTANTES_QUERY,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json({
                data:results[0]
                }
            );
        }
    });
});

app.get("/:mutaveis",(req,res) => {
    connection.query(QUANTIDADE_IMPORTANTES_QUERY.replace('%s',req.params.mutaveis),(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json({
                    data:results
                }
            );
        }
    });
});