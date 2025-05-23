'use strict';
//Solution - Assignment - 1
// const calcAverage = (a, b, c) => (a + b + c)/3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2*avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs. {avgKoalas})`);
//     } else if (avgKoalas >= 2*avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. {avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)

//Assignment - 2

// function calcTip (bill){
//     let tip = (bill>=50) && (bill<=300) ? bill*0.15 : bill*0.20;
//     return tip;
// }

// let tips = [];
// let bills = [125, 555, 44];
// for(let i=0; i<bills.length; i++){
//     tips.push(calcTip(bills[i]));
// }
// console.log(tips);

//Assignment-3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
    
//     calcBMI: function(){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi;
//     }
//   };
  
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
    
//     calcBMI: function(){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi;
        
//     }
//   };
  
//   mark.calcBMI();
//   john.calcBMI();
//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
//   } else {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
//   }