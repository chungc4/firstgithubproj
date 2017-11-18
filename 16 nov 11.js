document.write("Hello");

var age = 17;
var price = 100;
var finalprice = "Your Final Price is RM " + price;

if (age < 18){
	finalprice = price * .5;
}
else if (age < 40){
  finalprice = price;
}
else if (age < 65){
	finalprice = price * .75;
}
else {
	finalprice = price * .5;
}

document.write ("The Final price is RM " + finalprice )

document.write ("<br/>")

var n = 0 

if (n%2 == 0){
	document.write("This is an Even number")
}
if (n%2 !== 0){
	document.write("This is an Odd number")
}



for (i=1; i<20; i = i+2){
	document.write(i);
	document.write("<br/>");
}



var table = 5;
var row = 12;

for (i = 1; i <= row; i++) {
  document.write(i + " x " + table + " = " + i*table);
  document.write("<br/>");
}
 

var star = "x";
for (i = 0; i < 6; i++){
	document.write(star);
	star = star + "x";
	document.write("<br/>");
}

var chessboard = "#"
var size = 9


for (k = 0; k < 8; k++){
	for (i = 0; i < size; i++){
		if(i+k%2 === 0){
			document.write("#")
		}
		else {
			document.write(" ")
			
		}
	}	
	for (i = 1; i < size; i++){
		if(i+k%2 !== 0){
			document.write("#")
		}
		else {
			document.write(" ")
	  }
  	document.write("<br/>")
	}
}



