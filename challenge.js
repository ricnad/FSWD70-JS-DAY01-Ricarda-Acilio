

document.write("Challenge 1")
document.write("<hr>")
document.write("<br>")
var phrase="Vienna is a nice city"
var phraseSplit= new Array()
document.write(phrase+"<br>")
phraseSplit=phrase.split(' ')

document.write("<br>")

//easier way :)
var  vienna = [
["Vienna ","is ","a ","nice ","cit "],
["Vienna ","is ","a ","nice ","city "],
["Vienna ","is ","a ","nice ","city "],
["Vienna ","is ","a ","nice ","city "],
["Vienna ","is ","a ","nice ","city "]
]


document.write(vienna[0][0]+vienna[1][1]+vienna[2][2]+vienna[3][3]+vienna[4][4])
document.write("<br>")
document.write("<br>")
document.write("Challenge 2")
document.write("<hr>")
document.write("<br>")
document.write("Structure the following sentence:<br>")
document.write("<br>")
document.write("<br>")

var text1="Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$"
var text2="properties $flow$down;$actions$flow$up."
document.write(text1.split('$').join(' ')+text2.split('$').join(' '))