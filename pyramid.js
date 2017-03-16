function drawPyramid(height) {

    var pyramidShape = document.getElementById("shape").value;
    document.getElementById("pyramid").innerHTML="" + pyramidShape;

    var pyramidHeight = document.getElementById("height").value;
    document.getElementById("pyramid").innerHTML = "" + pyramidHeight;

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

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
