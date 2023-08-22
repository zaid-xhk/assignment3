//  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
//  - Write a program that calculates the percentage.
//  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
//  - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

// program no 1
var celcius:number = 37;
{
    var temperature:number = (celcius * 9)/5 + 32
    console.log("farenhiet degree", temperature);
}

var farehiet:number = 98.6;
{
    var temperature1:number =  (farehiet -32 ) * 5 /9   
      console.log("celcius degree", temperature1);
    
}
// program no 2
var obtainedNum:number = 538;
var originalNum:number = 1100;
var percentage:number = (obtainedNum*100) / originalNum;
console.log(percentage);


// program no 3
var days:number = 17
var week:number = 7
var result:number = days / week
var result2:number = Math.floor(result)
var result3:number = days%week
console.log(result2,"weeks",result3,"days");

// program no 5
var productPrice:number = 101;
if (productPrice>100) {
var discount:number = productPrice + (productPrice *(10/100));
console.log(discount);

}
else{
    var discount1:number = productPrice + (productPrice *(5/100));
    console.log(discount1);
    
    
}
// program no 6
var userAge:number =  19
if (userAge>19){
console.log("Adult");
}
else if (userAge>15) {
    console.log("teenager");
    
}
else{
    console.log("child");
    
}
// program no 7 
// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temprature:string = "warm";
if (temprature == "cold") {
    var suggest:string = "the temprature is cold so you wear warm cloths";
    console.log(suggest);
    
}
else{
var suggest1:string = "the temprature is hot so you wear summer cloths";
console.log(suggest1);

}
// program no 8
// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var numb:number = 15;
if (numb / 3 && numb / 5) {
    console.log("this number is divisible by both 3 or 5");
    
}
else{
console.log("this number is not divisible by both");

}

// program no 9
// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var consumedUints:number = 216
var unitPrice:number = 20
var amountBill:number = consumedUints * unitPrice
if (consumedUints<200 && consumedUints>100) {
    var addTax:number = amountBill + (amountBill * (10/100));
    console.log(addTax);
    
}
else if (consumedUints< 500 && consumedUints>200) {
    var addTax1:number = amountBill + (amountBill * (15/100));
    console.log(addTax1);
    
    
}
else if (consumedUints>500) {
    var addTax2:number = amountBill + (amountBill * (25/100));
    console.log(addTax2);
    
    

    
}

