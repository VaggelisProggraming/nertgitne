function storeIt() {
    let data = {
        NameActivity: document.getElementById("Name").value,
        TypeActivity: document.getElementById("type").value,
        distance: document.getElementById("distance").value,
        discription: document.getElementById("discription").value,
        gear: document.getElementById("gear").value,
        time: document.getElementById("time").value,
        AvgHR: document.getElementById("AvgHR").value,
        MaxHR: document.getElementById("MaxHR").value,
        Kcal: document.getElementById("Kcal").value,
        datetimeCreated: new Date().toISOString()
    };

    let oldData = JSON.parse(localStorage.getItem("activities"));

    let array = oldData || [];

    array.push(JSON.stringify(data));

    localStorage.setItem("activities", JSON.stringify(array));

    console.log('stored');
}

document.getElementById("type").innerHTML = localStorage.getItem("NameActivity");
document.getElementById("distance").innerHTML = localStorage.getItem("distance");
document.getElementById("discription").innerHTML = localStorage.getItem("discription");
document.getElementById("gear").innerHTML = localStorage.getItem("gear");
document.getElementById("time").innerHTML = localStorage.getItem("Time");
document.getElementById("AvgHR").innerHTML = localStorage.getItem("AverigeHR");
document.getElementById("MaxHR").innerHTML = localStorage.getItem("MaximumHR");
document.getElementById("Kcal").innerHTML = localStorage.getItem("Calories");