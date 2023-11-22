function update_grid(level, current_grid, clear_grid){

    let new_grid = null;
    if (clear_grid == true) {
        new_grid = current_grid
    } else {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", "http://cogninotes.pythonanywhere.com/generate", false);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        
        var data = { 'level': level };
        xmlHttp.send(JSON.stringify(data));

        new_grid = JSON.parse(xmlHttp.response)["success"];
    }

    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++){
            const cell = document.getElementById([row+1,col+1].toString());
            if (new_grid[row][col] != 0) {
                cell.value = new_grid[row][col].toString();
                cell.disabled = true;
                cell.style.backgroundColor = "#d3d3d3";
            } else {
                cell.value = ""
                cell.disabled = false;
                cell.style.backgroundColor = "#ffffff";
            }
        }
    }
    return new_grid 
}