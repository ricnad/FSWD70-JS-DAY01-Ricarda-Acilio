

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

document.write("<br>")
document.write("Loop=")

for (i=0;i<vienna.length; i++)	{ //i is the var middle is the condition to the loop
		document.write(vienna[i][i]);
	}

	document.write("<br>")
	document.write("<hr>")


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

document.write("<br>")
document.write("<br>")
document.write("Challenge 3")
document.write("<hr>")
document.write("<br>")
document.write("Structure the following sentence:<br>")
document.write("<br>")
document.write("<br>")

var text3="Hey there, i am a javascript developer, and i live in vienna"
var text4= new Array()
var text4= text3.split(' ')
var upper=text4.slice(2,3).join(' ')
document.write(upper.toUpperCase()+" ")
text4[6]="developer."
document.write(text4.slice(3,7).join(' '))

document.write("<hr>")
document.write("<br>")
document.write("Create a program using different methods, which will provide the following outputs:")
document.write("<br>")
document.write("<br>")

var newfruits=["Apple","Banana","Kiwi"]
document.write(newfruits.splice(2 , 0, "Orange, Strawberry")+newfruits)
