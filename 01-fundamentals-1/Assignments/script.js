//Solution to assignment 1
 let [massMark, heightMark, massJohn, heightJohn] = [78, 1.69, 92, 1.95];
 let [BMIMark, BMIJohn] = [massMark/(heightMark*heightMark), massJohn/(heightJohn*heightJohn)];

 let markHigherBMI = BMIMark > BMIJohn;
 console.log(BMIMark, BMIJohn, markHigherBMI);


//solution to assignment 2
if(BMIMark>BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

/* Write your code below. Good luck! 🙂 */

