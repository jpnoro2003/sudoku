$(document).ready(function(){
    var table = $('<table class="table table-bordered table-responsive-md sudoku-table">');

    for(var g = 0; g < 3; g++) {
        var sq_row = $('<tr>');

        for(var h = 0; h < 3; h++) {
            var sq_cell = $('<th scope="col" class="bg-transparent">');

            for(var i = 1; i < 4; i++) {
                var row = $('<tr class="bg-transparent">');
                
                for(var j = 1; j < 4; j++) {
                    var cell = $('<td class="bg-transparent sudoku-cell">');
                    var field = $('<input id="'+[3 * g + i, 3 * h + j].toString()+'" class="form-control text-center sudoku-input" maxlength="1" oninput="this.value=this.value.replace(/[^1-9]/g, \'\');">');
                    cell.append(field);
                    row.append(cell);
                }
            
                sq_cell.append(row);
            }
            sq_row.append(sq_cell)
        }
        table.append(sq_row)
    }
    $('div.container').append(table);
});