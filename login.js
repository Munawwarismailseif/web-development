// to retrive data from local storage
let LoginForm=document.querySelector("#LoginForm");
LoginForm.addEventListener("submit",function(event){
    event.preventDefault();
    let username=document.querySelector("#Username");
    let password=document.querySelector("#Password");
    if(username === "admin" && password === ""){
        let contact = JSON.parse("contact",JSON.getitem(contact)) || [];
        let contactinfo="";
        for(i=0;i<contact.length;i++){
            contactinfo += "<h1>contact #" + (i+1)+ "</h1>";
            contactinfo += "<p>name: " + contact[i].name + "</p>"
            contactinfo += "<p>adress: " + contact[i].adress + "</p>"
            contactinfo += "<p>email: " + contact[i].email + "</p>"
            contactinfo += "<p>comments: " + contact[i].comments + "</p>"
        };
        document.querySelector("#info").innerHTML=contactinfo;
    }else{
        alert("invalid username or password");
    };
    LoginForm.reset();
});