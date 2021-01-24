var ingredientBlacklist = [];

function addBlacklist(ingredient) {
    ingredientBlacklist.push(ingredient);
    document.getElementById("currentBlacklist").innerHTML = ingredientBlacklist;
}

function submitBlacklist() {
    let xhr = new XMLHttpRequest();
    let url = "submit.php";
    xhr.open("POST, url, true;");
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify(ingredientBlacklist);
    xhr.send(data);
}