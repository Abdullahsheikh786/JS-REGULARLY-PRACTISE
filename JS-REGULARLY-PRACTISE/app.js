
// function result() {
//     var username = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//      if (username === ""){
//         alert("PLEASE ENTER YOUR EMAIL")
//      }
//      else if (password === ""){
//         alert("PLEASE ENTER YOUR PASSWORD")
//      }
// }



// var getTime = new Date();
// var hours = getTime.getDay();
// var minutes = getTime.getMonth();
// var seconds = getTime.getFullYear();
// console.log(getTime.getDay())



// function getTime() {
//    var getTime = new Date();
//    console.log(getTime);
//    document.getElementById("time").innerText = getTime;
// }

// var students = ["abdullah" , "taha" , "ahmed"]
// var marks = [480 , 350 , 400]
// var totalMarks = 500;

// for (var i = 0; i < students.length; i++) {
//    var percentage = (marks[i] / totalMarks) * 100

//    console.log("Score of " + students[i] + " is " + marks[i] + ". Percentage: " + percentage + "%")
// }


// let x = 5;

// let y = "5";
// console.log(x == y);


// var add = prompt("enter a color to add to the beginning of the array")
// var colors = ["red" , "blue" , "green"]
// colors.unshift(add)
// console.log(colors)


// var add = prompt("enter a color to add to the end of the array")
// var colors = ["red" , "blue" , "green"]
// colors.push(add)
// console.log(colors)


// var colors = ["red" , "blue" , "green"]
// var add1 = prompt("enter a color to add to the beginning of the array")
// var add2 = prompt("enter a color to add to the beginning of the array")
// colors.unshift( add1 , add2)
// console.log(colors)


// var colors = ["red" , "blue" , "green"]
// colors.shift()
// // console.log(colors)

// var colors = ["red" , "blue" , "green"]
// colors.pop()
// console.log(colors)

// var index = Number(prompt("enter index number"))
// var colorAdd = prompt("enter color name")
// var colors = ["red" , "blue" , "green"]
// colors.splice(index , 0 , colorAdd)
// console.log(colors)


// var indexDel = Number(prompt("enter index number to delete color"))
// var noOfColor = Number(prompt("how many colors you want to delete"))
// var colors = ["red" , "blue" , "green" , "yellow" , "purple"]
// colors.splice(indexDel , noOfColor)
// console.log(colors)



// var colors = ["red" , "blue" , "green" , "yellow" , "purple"]
// colors.splice(2 , 1 , "black" , "white")
// console.log(colors)


// var arr = [12 , 45 , 3 , 22 , 34 , 50 , 5]
// arr.sort(
//    function(a , b){
//       return a - b
//    }
// )
// console.log(arr)


// var citys = ["karachi" , "lahore" , "islamabad" , "quetta" , "peshawar"]
// var selectedCitys = citys.slice(2 , 4)
// console.log(selectedCitys)


// var arr = ["This" , "is" , "my" , "cat"]
// var join = arr.join(" ")
// console.log(join)




// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// let dropdown = document.getElementById("dropdown")

// for (var i = 0; i < manufacturers.length; i++) {
//    let option = document.createElement("option")
//    option.innerText = manufacturers[i]
//    dropdown.add(option)
// }


// let num = Number(prompt("ENTER A NUMBER"))

// if (num % 3 === 0) {
//     alert("THIS NUMBER IS DIVISIBLE BY 3")
// }else{
//     alert("THIS NUMBER IS NOT DIVISIBLE BY 3")
// }



// let num = Number(prompt("ENTER A NUMBER"))

// if (num % 2 === 0) {
//     alert("THIS NUMBER IS A EVEN NUMBER")
// } else  {
//     alert("THIS NUMBER IS A ODD NUMBER")
// }


// let userAge = Number(prompt("ENTER YOUR AGE"))

// if (userAge > 18) {
//     alert("old enough ")
// } else {
//     alert("too young")
// }


// let name = prompt("ENTER YOUR NAME")

// if (name.toLowerCase() === "abdullah".toLowerCase()) {
//     alert("WELCOME")
// } else {
//     alert("THIS IS NOT SAME AS MY NAME" )
// }


// let num = Number(prompt("ENTER A NUMBER"))

// switch (num % 3) {
//     case 0:
//         alert("THIS NUMBER IS DIVISIBLE BY 3")
//         break;

//     default:
//         alert("THIS NUMBER IS NOT DIVISIBLE BY 3")
//         break;
// }


// let num1 = Number(prompt("ENTER A NUMBER"))
// let num2 = Number(prompt("ENTER ANOTHER NUMBER"))
// let op = prompt("ENTER OPERATOR")

// switch (op) {
//     case "+":
//         alert(num1 + num2)
//         break;

//     case "-":
//         alert(num1 - num2)
//         break;
//     case "*":
//         alert(num1 * num2)
//         break;

//     case "/":
//         alert(num1 / num2)
//         break;

//     default:
//         alert("INVALID OPERATOR")
//         break;
// }

// let day = prompt("ENTER A DAY")

// switch (day.toLowerCase()) {
//     case "monday".toLowerCase():
//         alert("start of week")
//         break;
//     default:
//         alert("mid week")
//         break;

// }


// let time = Number(prompt("ENTER TIME IN 24 HOURS FORMAT"))

// if (time >= 0 && time < 1200) {
//     alert("GOOD MORNING")
// } else if (time >= 1200 && time < 1700) {
//     alert("GOOD AFTERNOON")
// } else if (time >= 1700 && time < 2100) {
//     alert("GOOD EVENING")
// } else if (time >= 2100 && time <= 2359) {
//     alert("GOOD NIGHT")
// } else {
//     alert("INVALID TIME")
// }



// let time = prompt("Enter time in 24-hour format (e.g. 1900):");
//     time = Number(time);

//     if (time >= 0 && time < 1200) {
//       document.write("Time is " + (time / 100) + " AM");
//     }
//     else if (time === 1200) {
//       document.write("Time is 12 PM (Noon)");
//     }
//     else if (time > 1200 && time < 2400) {
//       let hour = Math.floor(time / 100) - 12;
//       document.write("Time is " + hour + " PM");
//     }
//     else {
//       document.write("Invalid time format. Please enter between 0000 and 2359.");
//     }



// var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }
// console.log(greeting)




// let password = 123456

// let userPassword = Number(prompt("ENTER YOUR PASSWORD"))

// if (!userPassword) {
//     alert("PLEASE ENTER YOUR PASSWORD")
// }else if (userPassword === password) {
//     alert("CORRECT!")
// }else {
//     alert("INCORRECT PASSWORD")
// }




// let num1 = Number(prompt("ENTER FIRST NUMBER"))
// let num2 = Number(prompt("ENTER SECOND NUMBER"))

// if (num1 > num2) {
//     alert(num1 + " is larger")
// }else if (num2 > num1) {
//     alert(num2 + " is larger")
// } else{
//     alert("both are equal")
// }


// let number = Number(prompt("ENTER A NUMBER"))

// if (number > 0) {
//     alert("THIS NUMBER IS POSITIVE")
// }else if (number < 0){
//     alert("THIS NUMBER IS NEGATIVE")
// }else {
//     alert("THIS NUMBER IS ZERO")
// }


// let hour = Number(prompt("TELL THE TIME IN 24 HOURS FORMAT"));

// if (hour >= 6  && hour < 9) {
//     alert("BREAKFAST TIME")
// }else if (hour >= 11 && hour < 15) {
//     alert("LUNCH TIME")
// } else if (hour >= 17 && hour < 20) {
//     alert("DINNER TIME")
// } else {
//     alert("SLEEP TIME")
// }

// Program to check the type of a variable
// let value = 42; // Change this value to test different types
// let type = typeof value;

// if (type === "number") {
//     console.log("The type of the variable is number.");
// } else if (type === "string") {
//     console.log("The type of the variable is string.");
// } else if (type === "boolean") {
//     console.log("The type of the variable is boolean.");
// } else if (type === "undefined") {
//     console.log("The type of the variable is undefined.");
// } else {
//     console.log("The type of the variable is something else: " + type);
// }


// let char = prompt("ENTER A CHARACTER").toLowerCase();
// if (char.length === 1) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         alert(char + " is a vowel")
//     }else {
//         alert(char + " is not a vowel")
//     }
// } else {
// alert("PLEASE ENTER A SINGLE CHARACTER")
// }


// let month = Number(prompt("ENTER A NUMBER OF MONTH"));
// switch (month) {
//     case 1:
//         alert("JANUARY")
//         break;
//     case 2:
//         alert("FEBAURARY")
//         break;
//     case 3:
//         alert("MARCH")
//         break;
//     case 4:
//         alert("APRIL")
//         break;
//     case 5:
//         alert("MAY")
//         break;
//     case 6:
//         alert("JUNE")
//         break;
//     case 7:
//         alert("JULY")
//         break;
//     case 8:
//         alert("AUGUST")
//         break;
//     case 9:
//         alert("SEPTEMBER")
//         break;
//     case 10:
//         alert("OCTOBER")
//         break;
//     case 11:
//         alert("NOVEMBER")
//         break;
//     case 12:
//         alert("DECEMBER")
//         break;
//     default:
//         alert("INVALID MONTH")
//         break;
// }


// let num = Number(prompt("ENTER A NUMBER"));
// for (let i = 1; i <= 10; i++) {
//     let result = num * i;
//     console.log(num + " x " + i + " = " + result);
// }


// let multiarr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// console.log(multiarr)

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }



// let tableNum = Number(prompt("ENTER A NUMBER TO SHOW ITS MULTIPLICATION TABLE"));
// let tableLength = Number(prompt("ENTER LENGTH OF MULTIPLICATION TABLE"));

// for (let i = 1; i <= tableLength; i++) {
//     let result = tableNum * i;
//     console.log(tableNum + " x " + i + " = " + result);
// }


// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// let foods = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userOrder = prompt("WELCOME TO BAKERY. WHAT DO YOU WANT TO ORDER SIR/MA'AM?").toLowerCase();

// let found = false;
// for (let i = 0; i < foods.length; i++) {
//     if (foods[i].toLowerCase() === userOrder) {
//         alert(userOrder + " is available at index " + i + " in our bakery");
//     }else if (!found) {
//         alert("We are sorry. " + userOrder + " is not available in our bakery");
//         found = true;
//     }
// }


// let arr = [24, 53, 78, 91, 12];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }

// }
// alert("The largest number is " + largest);



// let arr = [24, 53, 78, 91, 12];
// let smallest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// alert("The smallest number is " + smallest);




// let multiples = [];
// for (let i = 1; i <= 100; i++) {
//     multiples.push(i * 5);
// }
// console.log(multiples);  



// let fname = prompt("ENTER YOUR FIRST NAME");
// let lname = prompt("ENTER YOUR LAST NAME");

// let fullname = fname + " " + lname;
// alert("WELCOME " + fullname);




// let phone = prompt("ENTER YOUR FAVORITE PHONE MODEL");

// let length = phone.length;

// document.getElementById("result").innerHTML =
// "My favorite phone is: " + phone + "<br>Length of string: " + length;




// let country = "pakistan"
// console.log(country.indexOf("n"))






// var word = "Pakistani";
// var charAt3 = word.charAt(3); 
// var resultElement = document.getElementById("result");
// if (resultElement) {
//     resultElement.innerText = "Character at 3rd index in 'Pakistani' is: " + charAt3;
// } else {
//     console.log("Character at 3rd index in 'Pakistani' is: " + charAt3);
// }


// let str = "Hyderabad";
// let newStr = str.replace("Hyder", "Islam");
// console.log(newStr);




// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// console.log(newMessage);



// let str = "472";
// let num = Number(str);  
// console.log("value : " + str);




// let input = prompt("ENTER A NAME");
// let upperCase = input.toUpperCase();
// // console.log("User input: " + input);
// console.log("Upper case: " + upperCase);


// let input = prompt("ENTER A NAME");
// let titleCase = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// console.log("Title case: " + titleCase);



// let num = 35.36;
// let str = num.toString().replace(".", "");
// console.log(str);




// let username = prompt("ENTER A USERNAME");

// for (let i = 0; i < username.length; i++) {
//     let char = username.charAt(i);
//     if (char === "!" || char === "," || char === "." || char === "@") {
//         alert("PLEASE ENTER A VALID USERNAME");
//         break;
//     }
// }



// let foods = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userOrder = prompt("WELCOME TO BAKERY. WHAT DO YOU WANT TO ORDER SIR/MA'AM?").toLowerCase();

// let found = false;
// for (let i = 0; i < foods.length; i++) {
//     if (foods[i].toLowerCase() === userOrder) {
//         alert(userOrder + " is available at index " + i + " in our bakery");
//     } 
//     else {
//         if (foods[i].toLowerCase() !== userOrder && !found) {
//             alert("We are sorry. " + userOrder + " is not available in our bakery");
//             found = true;
//         }
//     }
// }



// let userInput = prompt("ENTER A NAME ");
// let lastChar = userInput.charAt(userInput.length - 1);

// console.log("LAST CHARACTER OF INPUT IS: " + lastChar);






