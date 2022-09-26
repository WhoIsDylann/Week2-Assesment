///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]



const summedPrice = cart.map(obj => obj.price).reduce((acc, curr) => { return acc + curr; }, 0 )

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/


// let cartTotal = 25.76;
// let couponValue = 5;
// let tax = .06;




calcFinalPrice = (cartTotal, couponValue, tax) => {
    let cartTax = cartTotal * tax
   // console.log(cartTax)
   let totalWTax = cartTotal + cartTax
    // console.log(totalWTax)
   let finalPrice = totalWTax - couponValue 
  // console.log(finalPrice)
   return finalPrice
}

console.log(calcFinalPrice(25.76,5,.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*

Customer Object
Name - string - 
Birthday (send out free coupon on bday)- number (M/D/YYYY) example : 7281999
email - string 
Fav Food - string - send relevant coupon out on bday


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

Customer1 = {
    name: 'Dylan',
    birthday: 7281999
    email: 'dbc0728@gmail.com',
    fav_food: 'Pasta'

}
