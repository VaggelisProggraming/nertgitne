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

function getIt() {
    let oldData = JSON.parse(localStorage.getItem("activities"));
    let array = oldData || [];
    const container = document.getElementById("parent");

    for (let i = 0; i < array.length; i++) {
        let data = JSON.parse(array[i]);
        console.log(data);
        for (let key in data) {
            console.log(key + " : " + data[key]);
            let div = document.createElement("div");
            div.innerHTML = key + " : " + data[key];
            container.appendChild(div);
        }
        container.appendChild(document.createElement("hr"));
    }
    console.log('fetched data.');
}
