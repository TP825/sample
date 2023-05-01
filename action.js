function getCellID(colsPerRow, r, c){
    var id = r*colsPerRow + c;
    return "c" + id;
}

function drawGameBoard(rows, cols){
    document.getElementById("member").innerHTML = "Triet Phan";
    var tble = document.createElement("table");
    var brd = document.getElementById("board");
    brd.appendChild(tble);
    for(var rows=1;rows<=8;rows++){
        var tblerw = document.createElement("tr");
        tble.appendChild(tblerw);
        for(var cols=1;cols<=8;cols++){
            var tbled = document.createElement("td");
            tbled.className = "white";
            tbled.id = getCellID(8, rows-1, cols-1);
            tblerw.appendChild(tbled);
        }
    }
}

var pieces = [
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0],
    [1,0,1,0,1,0,1,0,1]
];

function showGamePieces(rows, cols){
    document.getElementById("member").innerHTML = "Triet Phan";
    for(var rows=1;rows<=8;rows++){
        for(var cols=1;cols<=8;cols++){
            var val = pieces[rows-1][cols-1];
            var tb = getCellID(8, rows-1, cols-1);
            var tableData = document.getElementById(tb);
            if(val<0){
            tableData.className = "redpiece";
            }   
            if(val>0){
            tableData.className = "blackpiece";
            }  
        }
    }
}

var pieces2 = [
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1]
];

function showCheckerPieces(rows, cols){
    for(var rows=1;rows<=8;rows++){
        for(var cols=1;cols<=8;cols++){
            var val = pieces2[rows-1][cols-1];
            var tb = getCellID(8, rows-1, cols-1);
            var tableData = document.getElementById(tb);
            if(val<0){
                tableData.className = "black";
            }   
            if(val>0){
                tableData.className = "white";
            }  
        }
    }
}

