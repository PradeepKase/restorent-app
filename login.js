let btn=document.getElementById("btn")
btn.addEventListener("click",login)
async function login(){
    let login_data={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }
 login_data=JSON.stringify(login_data)

 let student_login_apilink='https://masai-api-mocker.herokuapp.com/auth/login' 

 let res=await fetch(student_login_apilink,{
    method:"POST",
    body:login_data,
    headers:{
        'Content-Type':'application/json'
    }
 })

 let data= await res.json()
 console.log(data)
// getprofile(data, login_data)
window.location="menu.html"
}



//  function getprofile({token} ,{username}){
//   fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
//     mode:"no-cors",
//         headers:{
//             Authorization:`Bearer ${token}`
//         }
//     })
//     .then((res)=>{
//         return res.json()
//     })
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// }
 async function getprofile({token} ,{username}){
let url=`https://masai-api-mocker.herokuapp.com/user/${username}`

let res= await fetch(url,{
    mode:"no-cors",
   headers:{
    Authorization:`Bearer ${token}`
   }
})
console.log(res)
let dt=await res.join()
console.log(dt)
 }