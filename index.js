const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const QUANTIDADE_IMPORTANTES_QUERY ="select count(1) as importantes from tarefas ta join triade t on t.triade_oid = ta.triade_oid where t.importante = 1";
const QUANTIDADE_URGENTES_QUERY="select count(1) as urgentes from tarefas ta join triade t on t.triade_oid = ta.triade_oid where t.urgente = 1";
const QUANTIDADE_CIRCUNSTANCIAIS_QUERY="select count(1) as circunstanciais from tarefas ta join triade t on t.triade_oid = ta.triade_oid where t.circunstancial = 1";
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

app.get("/importantes",(req,res) => {
    connection.query(QUANTIDADE_IMPORTANTES_QUERY,(err,results)=>{
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

app.get("/circunstanciais",(req,res) => {
    connection.query(QUANTIDADE_CIRCUNSTANCIAIS_QUERY,(err,results)=>{
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

app.get("/urgentes",(req,res) => {
    connection.query(QUANTIDADE_URGENTES_QUERY,(err,results)=>{
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