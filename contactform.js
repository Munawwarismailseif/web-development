// Store the data in local storage
let ContactForm=document.getElementById('ContactForm')
ContactForm.addEventListener("submit",function(event){
    event.preventDefault();

    var name = document.querySelector('#name').value;
    var adress = document.querySelector('#adress').value;
    var email = document.querySelector('#email').value;
    var comments = document.querySelector('#comments').value;

    var contact = {
        name: name,
        adress: adress,
        email: email,
        comments: comments,
    };
    //Save the contact data to local storage
    localStorage.setItem('contact',JSON.stringify(contact));

    //Display a succsess message
    alert('Form submitted')
    ContactForm.reset();


});



});