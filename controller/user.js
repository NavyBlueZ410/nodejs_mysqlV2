const {response,responseSuccess,responseError} = require('../setting/response')
const {processData,queryData,insertData,updateData,deleteData} = require('../setting/midleware')

// createUser
const createUser = async(req,res) => {
    const {username,password,nickname,id_status_user} = req.body

    switch(true){
        case !username : return response(res,400,"กรุณากรอก username") 
        case !password : return response(res,400,"กรุณากรอก password") 
        case !nickname : return response(res,400,"กรุณากรอก nickname") 
        case !id_status_user : return response(res,400,"กรุณากรอก id_status_user") 
        default : break
    }

    let sql_count = "SELECT COUNT(*) as count FROM user WHERE username = ?"
    let value_count = [username]

    const countUser = await processData(sql_count,value_count)
    if(countUser[0].count > 0){
        return response(res,400,"มีชื่อผู้ใช้นี้ในระบบแล้ว")
    }

    let sql_insert = "INSERT INTO user(username,password,nickname,id_status_user) VALUES (?,?,?,?)"
    let value_insert = [username,password,nickname,id_status_user]

    const insertUser = await processData(sql_insert,value_insert)
    if(insertUser){
        return response(res,200,"สมัครสมาชิกสำเร็จ")
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }
}

// getAllUser
const getAllUser = async(req,res) => {
    const page = parseInt(req.query.page) || 1; // Get the page number from the query parameters
    const pageSize = 2; // Number of items per page
  
    // Calculate the offset
    const offset = (page - 1) * pageSize;
  
    let sql_query = "SELECT * FROM user LIMIT ?, ?";
    let value_query = [offset, pageSize]

    let sql_count = "SELECT COUNT(*) as count FROM user"
    
    const countUser = await processData(sql_count)   
    const getAllUser = await processData(sql_query,value_query)
    if(getAllUser&&countUser){
        let totalUser = countUser[0].count
        const totalPages = Math.ceil(totalUser / pageSize);

        let dataGetAllUser = {  
            page_size: pageSize,
            page: page,
            total_page: totalPages,
            total_user: totalUser,
            data: getAllUser
        }

        return response(res,200,"สำเร็จ",dataGetAllUser)
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }
} 

// findUser
const findUser = async(req,res) => {
    const id_user = req.query['id_user']

    switch(true){
        case !id_user : return response(res,400,"กรุณากรอก id_user") 
        default : break
    } 

    let sql_query = "SELECT * FROM user WHERE id_user = ?"
    let value_query = [id_user]

    const findUser = await processData(sql_query,value_query)
    if(findUser){
        return response(res,200,"สำเร็จ",findUser)
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }
}

// updateUser
const updateUser = async(req,res) => {
    const {id_user,username,password,nickname,id_status_user} = req.body
    
    switch(true){
        case !id_user : return response(res,400,"กรุณากรอก id_user") 
        case !username : return response(res,400,"กรุณากรอก username") 
        case !password : return response(res,400,"กรุณากรอก password") 
        case !nickname : return response(res,400,"กรุณากรอก nickname") 
        case !id_status_user : return response(res,400,"กรุณากรอก id_status_user") 
        default : break
    }    

    let sql_update = `UPDATE user SET username = ?,password = ?,nickname = ?,id_status_user = ?
                      WHERE id_user = ? `
    let value_update = [username,password,nickname,id_status_user,id_user]

    const updateUser = await processData(sql_update,value_update)
    if(updateUser){
        return response(res,200,"อัพเดพข้อมูลสำเร็จ")
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }
}

// deleteUser
const deleteUser = async(req,res) => {
     const id_user = req.query['id_user']

     switch(true){
        case !id_user : return response(res,400,"กรุณากรอก id_user") 
        default : break
    } 

    let sql_delete = "DELETE FROM user WHERE id_user = ?"
    let value_delete = [id_user]

    const deleteUser = await processData(sql_delete,value_delete)
    if(deleteUser){
        return response(res,200,"ลบข้อมูลสำเร็จ")
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }
}

const  login = async(req,res) => {

    // const user = { id: result[0].id_user, username: result[0].username }
    // const token = jwt.sign(user, secretKey, { expiresIn: '24h' })
}


module.exports = {createUser,getAllUser,findUser,updateUser,deleteUser,login}