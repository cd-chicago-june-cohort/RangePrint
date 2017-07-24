// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.

function PrintRange(Start, End, Skip) {
    for (var i = start; i < End; i += Skip) {
        console.log(i);
    }
}

PrintRange(2, 10, 2);