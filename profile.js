

// Update the username Cookies 
function submit() { 
    var input = document.getElementById("UserName").value;
    Cookies.set('Username', input)
}
