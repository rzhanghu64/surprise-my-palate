var ingredientBlacklist = [];
var mealHistory = [];
//document.getElementById("currentBlacklist").innerHTML = ingredientBlacklist;

function addBlacklist(ingredient) {
    ingredientBlacklist.push(ingredient);
    document.getElementById("currentBlacklist").innerHTML = "";
    console.log(ingredientBlacklist);
    ingredientBlacklist.forEach(appendToBlacklist);
    //document.getElementById("currentBlacklist").innerHTML = ingredientBlacklist;
}

function addMealHistory(meal) {
    mealHistory.push(meal);
    document.getElementById("currentMealHistory").innerHTML = "";
    console.log(mealHistory);
    mealHistory.forEach(appendToMealHistory);
}

function appendToBlacklist(item, index) {
    var mydiv = document.getElementById("currentBlacklist");
    var newcontent = document.createElement('li');
    newcontent.setAttribute("class", "list-group-item");
    newcontent.innerHTML = item;
    mydiv.appendChild(newcontent);
}

function appendToMealHistory(item, index) {
    var mydiv = document.getElementById("currentMealHistory");
    var newcontent = document.createElement('li');
    newcontent.setAttribute("class", "list-group-item");
    newcontent.innerHTML = item;
    mydiv.appendChild(newcontent);
}

/* function submitBlacklist() {
    let xhr = new XMLHttpRequest();
    let url = "submit.php";
    xhr.open("POST, url, true;");
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify(ingredientBlacklist);
    xhr.send(data);
}*/

$(document).on("click", ".submitButton", function () {
    console.log("HEY I WAS CLICKED");
    console.log(mealHistory);
    console.log(ingredientBlacklist);
    $.ajax({
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        'diet': ingredientBlacklist,
        'meal-history': mealHistory
      }),
      url: 'http://localhost:4000/foods',
      success: (d, ts, jq) => {
        console.log("I AM THE SUCCEED")
      }
    });
})
