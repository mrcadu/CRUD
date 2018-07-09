const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const QUANTIDADE_IMPORTANTES_QUERY ="select count(1) as importantes from tarefas ta join triade t on t.triade_oid = ta.triade_oid where t.importante = 1";
const QUANTIDADE_URGENTES_QUERY="select count(1) as urgentes from tarefas ta join triade t on t.triade_oid = ta.triade_oid where t.urgente = 1";
const QUANTIDADE_CIRCUNSTANCIAIS_QUERY="select count(1) as circunstanciais from tarefas ta join triade t on t.triade_oid = ta.triade_oid where t.circunstancial = 1";
const QUANTIDADE_EMOCIONAL_QUERY = "select count(1) as emocional from tarefas t join equilibrio e on e.equilibrio_oid = t.equilibrio_oid where e.Emocional = 1";
const QUANTIDADE_ESPIRITUAL_QUERY = "select count(1) as espiritual from tarefas t join equilibrio e on e.equilibrio_oid = t.equilibrio_oid where e.Espiritual = 1";
const QUANTIDADE_FISICO_QUERY = "select count(1) as fisico from tarefas t join equilibrio e on e.equilibrio_oid = t.equilibrio_oid where e.Físico = 1";
const QUANTIDADE_MENTAL_QUERY = "select count(1) as mental from tarefas t join equilibrio e on e.equilibrio_oid = t.equilibrio_oid where e.Mental = 1";
const QUANTIDADE_ESTUDANTE_QUERY = "select count(1) as estudante from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Estudante = 1";
const QUANTIDADE_MUSICO_QUERY = "select count(1) as musico from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Músico = 1";
const QUANTIDADE_SIGA_QUERY = "select count(1) as siga from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Siga = 1";
const QUANTIDADE_FESTEIRO_QUERY = "select count(1) as festeiro from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Festeiro = 1";
const QUANTIDADE_FAMILIAR_QUERY = "select count(1) as familiar from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Familiar = 1";
const QUANTIDADE_ESPORTISTA_QUERY = "select count(1) as esportista from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Esportista = 1";
const QUANTIDADE_ESCRITOR_QUERY = "select count(1) as escritor from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Escritor = 1";
const QUANTIDADE_AMIGO_QUERY = "select count(1) as amigo from tarefas t join papeis p on p.papeis_oid = t.papeis_oid where p.Amigo = 1";


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

app.get("/circunstanciais",(req,res) => {
    connection.query(QUANTIDADE_CIRCUNSTANCIAIS_QUERY,(err,results)=>{
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

app.get("/urgentes",(req,res) => {
    connection.query(QUANTIDADE_URGENTES_QUERY,(err,results)=>{
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

//Equilibrio
app.get("/emocional",(req,res) => {
    connection.query(QUANTIDADE_EMOCIONAL_QUERY,(err,results)=>{
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

app.get("/espiritual",(req,res) => {
    connection.query(QUANTIDADE_ESPIRITUAL_QUERY,(err,results)=>{
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

app.get("/fisico",(req,res) => {
    connection.query(QUANTIDADE_FISICO_QUERY,(err,results)=>{
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

app.get("/mental",(req,res) => {
    connection.query(QUANTIDADE_MENTAL_QUERY,(err,results)=>{
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

//Papéis
app.get("/musico",(req,res) => {
    connection.query(QUANTIDADE_MUSICO_QUERY,(err,results)=>{
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
app.get("/siga",(req,res) => {
    connection.query(QUANTIDADE_SIGA_QUERY,(err,results)=>{
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
app.get("/festeiro",(req,res) => {
    connection.query(QUANTIDADE_FESTEIRO_QUERY,(err,results)=>{
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
app.get("/familiar",(req,res) => {
    connection.query(QUANTIDADE_FAMILIAR_QUERY,(err,results)=>{
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
app.get("/esportista",(req,res) => {
    connection.query(QUANTIDADE_ESPORTISTA_QUERY,(err,results)=>{
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
app.get("/escritor",(req,res) => {
    connection.query(QUANTIDADE_ESPORTISTA_QUERY,(err,results)=>{
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
app.get("/amigo",(req,res) => {
    connection.query(QUANTIDADE_AMIGO_QUERY,(err,results)=>{
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
app.get("/estudante",(req,res) => {
    connection.query(QUANTIDADE_ESTUDANTE_QUERY,(err,results)=>{
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