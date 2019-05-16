//exercise 1

document.write("Exercise 1<br>")
document.write("<br>")
document.write("<br>")
document.write("Sum the following variables and store the result in one new variable = ")
var a = 7

var b = 14

var c = "21"

var d = '36'

var e = 42

var sum = a + Number(b) + Number(c) + Number(d) +e

document.write(sum+"<br>")
document.write("<br>")
document.write("<br>")
document.write("<hr>")
document.write("<br>")
document.write("<br>")



document.write("Multiply the following variables and store the result in one new variable = ")

var f = '1';

var g = 15;

var h = 8;

var i = "1";

var mult = Number(f)*g*h*Number(i)

document.write (mult+"<br>")

document.write("<br>")
document.write("<br>")
document.write("<hr>")
document.write("<br>")
document.write("<br>")


document.write("Divide the two results that you got from the arithmetic operations and print the result in the web browser = ")
document.write(sum/mult)

document.write("<br>")
document.write("<br>")
document.write("<hr>")
document.write("<br>")
document.write("<br>")

//exercise 2


document.write("Exercise 2<br>")

document.write("<br>")
document.write("<br>")

var multArray = [ 
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27], 
[7, 4, 28, 14], 
[3, 10, 25, 7], 
[21, 4, 6, 17], 
[3, 5, 26, 3] ]

document.write("Select and output the numbers "+multArray[1][1]+", "+multArray[4][2]+", "+multArray[5][3]+", "+multArray[2][3]+" and "+multArray[2][1]+" in the console")
console.log(multArray[1][1], multArray[4][2], multArray[5][3], multArray[2][3], multArray[2][1])