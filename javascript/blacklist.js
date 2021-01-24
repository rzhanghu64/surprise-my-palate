var ingredientBlacklist = [];
//document.getElementById("currentBlacklist").innerHTML = ingredientBlacklist;

function addBlacklist(ingredient) {
    ingredientBlacklist.push(ingredient);
    document.getElementById("currentBlacklist").innerHTML = "";
    console.log(ingredientBlacklist);
    ingredientBlacklist.forEach(appendToBlacklist);
    //document.getElementById("currentBlacklist").innerHTML = ingredientBlacklist;
}

function appendToBlacklist(item, index) {
    var mydiv = document.getElementById("currentBlacklist");
    var newcontent = document.createElement('li');
    newcontent.setAttribute("class", "list-group-item");
    newcontent.innerHTML = item;
    mydiv.appendChild(newcontent);
}

function submitBlacklist() {
    let xhr = new XMLHttpRequest();
    let url = "submit.php";
    xhr.open("POST, url, true;");
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify(ingredientBlacklist);
    xhr.send(data);
}

