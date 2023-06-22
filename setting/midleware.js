const db = require('../database/connect')

const processData = (sql,value) => {
    return new Promise(resolve =>{
        db.query(sql,value,(err,result) => {
            if(err){
                resolve(false)
            }else{
                resolve(result)
            }
        })
    })
} 

const queryData = (sql,value) => {
    return new Promise(resolve =>{
        db.query(sql,value,(err,result) => {
            if(err){
                resolve(false)
            }else{
                resolve(result)
            }
        })
    })
} 

const insertData = (sql,value) => {
    return new Promise(resolve =>{
        db.query(sql,value,(err,result) => {
            if(err){
                resolve(false)
            }else{
                resolve(result)
            }
        })
    })
} 

const updateData = (sql,value) => {
    return new Promise(resolve =>{
        db.query(sql,value,(err,result) => {
            if(err){
                resolve(false)
            }else{
                resolve(result)
            }
        })
    })
} 

const deleteData = (sql,value) => {
    return new Promise(resolve =>{
        db.query(sql,value,(err,result) => {
            if(err){
                resolve(false)
            }else{
                resolve(result)
            }
        })
    })
} 

module.exports = {processData,queryData,insertData,updateData,deleteData}