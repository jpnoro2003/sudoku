function check_grid(){
    alert("Hi")

    // Get values in current grid
    var grid = []
    for (var row = 0; row < 9; row++) {
        var ele = []
        for (var col = 0; col < 9; col++){
            const cell = document.getElementById([row+1,col+1].toString());
            if (cell.value >= 1) {
                ele.push(parseInt(cell.value))
            }
            else {
                ele.push(0)
            }
        }
        grid = grid.concat([ele])
    }

    // send request
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "https://cogninotes.pythonanywhere.com/check", false);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    
    var data = { 'grid': grid };
    xmlHttp.send(JSON.stringify(data));

    test = JSON.parse(xmlHttp.response)
    if (test["solved"]){
        alert("Solved! :D")
    } else {
        alert("Not Solved :(")
    }
}