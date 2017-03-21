function drawPyramid() {

    var pyramidShape = document.getElementById("shape").value;
    var pyramidHeight = document.getElementById("height").value;

    document.getElementById("pyramid").innerHTML = "";
    document.getElementById("slider_num").innerHTML = ("&nbsp&nbsp" + pyramidHeight);

    for (var row = 0; row < pyramidHeight; row++) {

        var numBricks = row + 2;
        var numSpaces = pyramidHeight - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += pyramidShape;
        }
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
