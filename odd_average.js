/*--------------Odd Number---------*/
function oddAverage(numbers) {
  const odd = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }
  let sum = 0;
  for (const number of odd) {
    sum = sum + number;
  }
  const count = odd.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}
// const numbers = [33, 66, 1, 2, 44, 33, 65, 43, 98, 9];
// const avg = oddAverage(numbers);
// console.log("Average of the odd number:", avg);


/*--------------Even Number---------*/
function evenAverage(numbers){
    const even=[];
    for ( const number of numbers){
        if(number % 2===0){
            even.push(number)
        }
    }
    let sum =0;
    for (const number of even){
        sum =sum + number;
    }
    const count =even.length;
    console.log(sum,count)
    const avg =sum /count;
    return avg;
    
}
const numbers2 =[55,66,1,2,1,3,5,66,77,4,5,3,3,22,343,320,5]
const avg2 =evenAverage(numbers2)
console.log("Average of the even number:",avg2);