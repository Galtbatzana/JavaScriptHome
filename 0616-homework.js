///////////////////////////////////////////////////////////////

// 1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү.

// const a = 936;
// const b = 12;
// const c = 9;

// let sum2 = (a / b) / c;
// console.log(sum2);   

////////////////////////////////////////////////////////////////

// 2.  Гараас 0-100 хооронд тоон утга авч 90-100-н хооронд байвал true, бусад утгад false буцаа.

// const d = 100;

// if (d <= 100 && d >= 90) {
//     console.log(" given number is true!");
// } else { 
//     console.log("given number is false!");
// }
///////////////////////////////////////////////////////////////

// 3. Он, сараа гараас оруулахад тухайн сар хэд хоногтой болохыг харуул.

// const year = 2000;
// const month = 2;

// if (year % 4 == 0 ) {
//     console.log("leap year");
// }

// if (month === 1 && month === 3 & month === 5 && month === 7 && month === 8 && month === 10 && month === 12) {
//     console.log("this month has 31 days");
// } else if ( month == 2) {
//     console.log("this month has 29 days");
// } else { 
//     console.log("this month has 30 days");

// }
//////////////////////////////////////////////////////////////////

// 4. Өгөгдсөн эерэг тоо нь 3 эсвэл 7-ын үржвэр эсэхийг шалгана уу.

// const number = 234;
// const number1 = 456;
// const number2 = 5678;

// if (number2 % 3 === 0 && number2 % 7 === 0) {
//     console.log("this number is divisble by 3 & 7");
// } else {
//     console.log("this number is not divisble by 3 & 7");
// }
////////////////////////////////////////////////////////////////

// // 5. Өгөгдсөн тооны тэгш эсвэл сондгой эсэхийг шалгана уу.

// const e = 45;

// if (e % 2 === 0) {
//     console.log("even number");
// } else { 
//     console.log("odd number");
// }
///////////////////////////////////////////////////////////////

// 6. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад хэвлэж харуулна уу.

// const f = 1234;

// if (f % 2 === 0) {
//     console.log("even number");
// } else { 
//     console.log("odd number");
// }
/////////////////////////////////////////////////////////////

// 7. 4 н хувьсагч зарлан тоон утга өг. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.

// let g = 60;
// let h = 70;
// let j = 80;
// let m = 90;

// let sum = 0;

// if (g >= 80) {
//     sum = sum + g;
// }  
// if (h >= 80) {
//    sum = sum + h;
// }
// if (j >= 80) {
//    sum += j;  
// } 
// if (m >= 80) {
//     sum += m;
// } 
// console.log(sum);

////////////////////////////////////////////////////////////
// 1.hadgalmj huvisagch uusgeh
// 2.jild 2 udaa 300.000 tugrug
// 3. nerniihee urtaar huu bodoh
// 4. 12 jild

// 1 jild = 600 000
// sard = 600 000 * 12 = 7 200 000 jil
// jild 4% huu bodno


// const yearly = 11;
// const salary = 600000;

// accont = () => { 
//    account = total; 
//    total = yearly * salary
//    console.log(account);
// }
////////////////////////////////////////////////////

// 1. "I love you!" 100 udaa hevle!!!

// let text1 = "I love you!";
//let k = 1;
// while (k < 10) {
//     text1 = text1 + "I love you!" + k;
//     k++;

// } 
// console.log(text1);

// for (let i = 0; i < 10; i++) {
//     console.log(text1);
// }
/////////////////////////////////////////////////////////
// niilberiig ol ///

// const array = [43,56,23,89,15,290,11];
// let total = 0;
// for (let i = 0; i < array.length; i++) {
//     total = total + array[i];
// } 
// console.log(total)

//////////////////////////////////////////////////////////
// hamgiin ih toog ol //

// let sumBiggest = 0;
// for (let i = 0; i < array.length; i++) {
//     if(sumBiggest < array[i]) {
//         sumBiggest = array[i]; 
//     }
// } console.log(sumBiggest); 

//////////////////////////////////////////////////////
// hamgiin baga toog ol //

// let sumSmallest = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (sumSmallest > array[i]) {
//         sumSmallest = array[i];
//     }
// } console.log(sumSmallest);

//////////////////////////////////////////////////////////
// ehnii toof awah
// array.shift(43)
// console.log(array);

////////////////////////////////////////////////////////
// 1981 array deer nemeh //
// array.unshift(1981);
// console.log(array);

//////////////////////////////////////////////////////
// array iin suuld too nemeh //
// array.push(1989);
// console.log(array);

////////////////////////////////////////////////
// suuliin toog hasah //
// array.pop();
// console.log(array);

///////////////////////////////////////////


