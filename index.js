async function signup(){
    console.log("inside")
   let  signup_data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
        mobile:document.getElementById("mobile").value,
        description:document.getElementById("description").value
    }
    signup_data=JSON.stringify(signup_data)

    let student_apilink="https://masai-api-mocker.herokuapp.com/auth/register";
    //fetch
    //custome settings objects
    // GET or POST
    let res=await fetch(student_apilink,{
        method:"POST",
        body:signup_data,
        headers:{
            'Content-Type':'application/json'//whenrver dealing with JSON content add this header
        }
    })

    let data=await res.json();
    console.log(data)
    window.location="login.html"
}



