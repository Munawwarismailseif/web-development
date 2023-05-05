function saveFormData() {
    var name = document.getElementaryById('name').value;
    var name = document.getElementaryById('address').value;
    var name = document.getElementaryById('email').value;

    localStorage.setItem('name',name);
    localStorage.setItem('address',address);
    localStorage.setItem('email',email);

}
