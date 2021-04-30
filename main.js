/*
Jeffery Tse
main.js

Question:
Convert an array of integers into an array of strings representing 
the phonetic equivalent of the integer.
*/

// grab inputed numbers from call
var intArray = process.argv;
var output = "";

// loop through the array of integers
for(var i=2; i<intArray.length; i++) {
    var strInt = String(intArray[i]);

    // loop through the number to convert to phonetic equivalent
    for(var j=0; j<strInt.length; j++) {
        switch(strInt.charAt(j)) {
            case '0':
                output += "Zero";
                break;
            case '1':
                output += "One";
                break;
            case '2':
                output += "Two";
                break;
            case '3':
                output += "Three";
                break;
            case '4':
                output += "Four";
                break;
            case '5':
                output += "Five";
                break;
            case '6':
                output += "Six";
                break;
            case '7':
                output += "Seven";
                break;
            case '8':
                output += "Eight";
                break;
            case '9':
                output += "Nine";
                break;
        }
    }
    // only add commas in between numbers
    if (i < intArray.length-1) {
        output += ","
    }
}
console.log(output);