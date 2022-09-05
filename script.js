function storeIt() {
    console.log('stored')


    var input = document.getElementById("Name").value;
    localStorage.setItem("NameActivity", input);

    var input = document.getElementById("type").value;
    localStorage.setItem("TypeActivity", input);
    
    var input = document.getElementById("distance").value;
    localStorage.setItem("distance", input);
    
    
    var input = document.getElementById("discription").value;
    localStorage.setItem("discription", "None");
    if(localStorage.getItem("discription") === "") {
        localStorage.setItem("discription", "None");
    }
    
    else {
        var input = document.getElementById("discription").value;
        localStorage.setItem("discription", input);
    }
    
    var input = document.getElementById("gear").value;
    localStorage.setItem("gear", input);
    
    var input = document.getElementById("time").value;
    localStorage.setItem("Time", input);
    
    var input = document.getElementById("AvgHR").value;
    localStorage.setItem("AverigeHR", input);
    
    var input = document.getElementById("MaxHR").value;
    localStorage.setItem("MaximumHR", input);
    
    var input = document.getElementById("Kcal").value;
    localStorage.setItem("Calories", input);
    
    

}

document.getElementById("type").innerHTML = localStorage.getItem("NameActivity");
document.getElementById("distance").innerHTML = localStorage.getItem("distance");
document.getElementById("discription").innerHTML = localStorage.getItem("discription");
document.getElementById("gear").innerHTML = localStorage.getItem("gear");
document.getElementById("time").innerHTML = localStorage.getItem("Time");
document.getElementById("AvgHR").innerHTML = localStorage.getItem("AverigeHR");
document.getElementById("MaxHR").innerHTML = localStorage.getItem("MaximumHR");
document.getElementById("Kcal").innerHTML = localStorage.getItem("Calories");