function create_grid(){
    // Creating a table dynamically
    // var table = $('<table class="table-responsive">');
    var table = $('<table class="table-fluid" align="center">');

    for(var g=0; g<3; g++){ // major square row
        var sq_row = $('<tr class="bg-transparent">');

        for(var h=0; h<3; h++){ // major square col
            var sq_cell = $('<th scope="col" class="bg-transparent">');

            for(var i=1; i<4; i++){ // minor square row
                var row = $('<tr class="bg-transparent">');
                
                for(var j=1; j<4; j++){ // minor square col
                    var cell = $('<th scope="col" class="bg-transparent" style="border:0.5vh solid transparent;">');
                    var field = $('<input id="'+[3*g+i, 3*h+j].toString()+'"style="aspect-ratio: 1 / 1; width: 7.5vmin; height:7.5vmin; font-size: 4vmin; border-radius: 0;" class="form-control text-center" maxlength="1" oninput="this.value=this.value.replace(/[^1-9]/g,'+'\'\''+');">');
                    cell.append(field);
                    row.append(cell);
                }
            
                sq_cell.append(row);
            }
            sq_row.append(sq_cell)
        }
        table.append(sq_row)
    }
    // Appending the table to the HTML body
    $('div.container-fluid:first').append(table);
};