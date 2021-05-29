// Chapter#17 to 20
// Question#01
// var arr = [[],[]];
// Question#02
// var arr=[0,1,2,3]
// var arr1=[1,0,1,2]
// var arr2=[2,1,0,1];
// document.write(arr+"<br>"+arr1+"<br>"+arr2);
// Question#03
// for(var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }
// Question#04
// var num=+prompt("Enter any number");
// var num2=+prompt("Give length");
// for(var i=1;i<=num2;i++){
//     document.write(num+"x"+i+"="+num*i+"<br>");
// }
// Question#05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write("Element of index"+""+ i+fruits[i] + "<br>");  
// }
// Question#06a
// for(var i=1;i<=15;i++){
//     document.write(i+"<br>");
// }
// Question#06b
// for(var i=10;i>=1;i--){
//     document.write(i+"<br>");
// }
// Question#06c
// for(var i=0;i<=10;i++){
//     document.write(i*2+"<br>");
// }
// Quetion#06d
// for(var i=1; i<=20; i++){
//     if((i % 2) != 0){
//         document.write([i] + "<br>")
//     }
// }
// Question#06e
// for(var i=1;i<=10;i++){
//         document.write(i*2+"K"+"<br>");
//  }

// Question#07
// var b=prompt("Enter bakery product names")
// var flag=true;
// var a= ["cake", "apple pie", "cookie", "chips", "patties"];
// for(var i=0;i<a.length;i++){
// if(b===a[i]){
//     document.write(b+"is available at index"+""+i+"in our bakery");
// flag=false;
// }
// }
// if(flag){
//     document.write("We are sorry.pastry is not availbale in our bakery")
// }
// Question#08
// var array = [24 , 53, 78, 91, 12];
// var largest= array[0];

// for (i=0; i<array.length;i++){
//     if (array[i]>=largest) {
//          largest=array[i];
        
//     }
// }
// document.write("array item"+array+"<br>");
// document.write("The largest number is"+" "+largest);

// Question#09
// var array=[24, 53, 78, 91, 12];
// var smallest= array[0];
// for (i=0; i>array.lenght;i++){
//         if (array[i]<=smallest) {
//             smallest=array[i];
            
//         }
//     }
//    document.write("array item"+array+"<br>"); 
    
//     document.write("<br>"+"The smallest number is "+smallest);


// Question#10
// for(var i=1; i<=100; i++){
//     if((i % 5) == 0){
//         document.write(i + "<br>")
//     }
// }

// Chapter 21 to 25
// Question#01
// var firstname=prompt("Enter your first name");
// var lastname=prompt("Enter your last name");
// var a= firstname+lastname;
// document.write(a+" "+"Good morning")
// Question#02
// var mobile=prompt("Enter your favorite mobile phone name");
// document.write("My favorite mobile is : "+" "+mobile+"<br> "+"Lenght of string:"+" "+mobile.length);
// Question#03
// var a="Pakistan";
// var n=a.indexOf("n");
// document.write("String"+" "+a+"<br>"+"index of 'n'"+" "+n);
// Question#04
// var a="Hello World";
//  var n=a.lastIndexOf("l");
// document.write("String"+" "+a+"<br>"+"Last of index 'l'"+" "+n);
// Question#05
// var a="Pakistani";
//  var n=a.charAt(3);
// document.write("String"+" "+a+"<br>"+"Character at index 3:"+" "+n);
// Question#06
// var str = "Q1";
// var b=str.repeat(4)
// document.write(b);
// Question#07
// var a ="Hyderabad";
// for(var i=0;i<a.length;i++){
//     if(a.slice(i,i+5)==="Hyder"){
//         a=a.slice(0,i)+"Islam"+a.slice(i+5)
//     }
// }
// document.write(a)
// Question#08
// var a = "Ali and Sami are best friends. They play cricket and football together.";
// for(var i=0;i<a.length;i++){
//          if(a.slice(i,i+3)==="and"){
//             a=a.slice(0,i)+"&"+a.slice(i+3)
//         }
//     }
//     document.write(a);
// Question#09
// var a="472";
// var b=parseInt(a);
// document.write("Value :"+a+"<br>"+"Type :"+typeof a+"<br>");
// document.write("Value :"+b+"<br>"+"Type :"+typeof b);
// Question#10
// var a=prompt("Enter any word");
// document.write(a.toUpperCase());
// Question#11
// var a=prompt("Enter any word");
// document.write(a[0].toUpperCase()+a.slice(1));
// Question#12
// var num = 35.36;
// document.write("Number :"+num+"<br>"+"Result:"+(num + '').replace('.', ''));
// Question#13
// var password = prompt("Enter your password");
//  var str = password.length;
//  var flag = true;
// for (var i = 0; i < str; i++) {
//     if (password.slice(i, i + 1) == "!" || password.slice(i, i + 1) == "@" || password.slice(i, i + 1) == "," || password.slice(i, i + 1) == "." )
//     {
//     var flag = false;
// document.write("please enter password without special character");
// break;
//  }
// }
// if(flag){
//     document.write("Your password save");
// }
// Question#14
// var a=prompt("Enter your favourite cookie");
// var arr= ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// var firstcharacter=a.slice(0,1);
// firstcharacter=firstcharacter.toUpperCase();
// var othercharacter=a.slice(1)
// othercharacter=othercharacter.toLowerCase();
// var b=firstcharacter+othercharacter;
// var flag=true;
// for(var i=0; i<arr.length;i++){
//     if(b===arr[i]){
//         var flag=false;
//         document.write(b+"is available at index"+" "+i+" "+"in our bakery");
//     }
// }
// if(flag){
//     document.write("We are sorry.pastry is not availbale in our bakery")
// }
// Question#15
// Question#16
// var university = "University of Karachi";
// var ar = university.split("");
// for(var i=0;i<ar.length;i++){
//     document.write(ar[i]+"<br>")
// }
// Question#17
// var a=prompt("Enter any word");
// var b=a.charAt(a.length-1)
// document.write(b);
// Question#18
// var a="The quick brown fox jumps over the lazy dog";
// var b = a. match(/The|the/g). length;
// document.write("Text: "+a+"<br>");
// document. write("There are"+" "+b+" "+"occurrences of word 'the'");



