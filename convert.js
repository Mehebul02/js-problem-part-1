/* 12 inch 1 feet */
function inchFeet(inch){
    const feet = inch /12;
    return feet.toFixed(3);
}
const height = inchFeet(79);
console.log(height) 


//------------- part -2---------------
function inchOfFeet(inch){
    const feet =inch / 12;
    const feetNumber =parseInt(feet);
    const inchRaming =inch %12;
    const result =feetNumber + " Fit " + inchRaming + " Inch "
    return result;
}
const height2 =inchOfFeet(87);
console.log(height2)

// -----------------------Mile to km -----------------
function mileToKm(mile){
    const km =mile *1.60934;
    const str =parseInt(km)
    return str ;
}
const kilo =mileToKm(290);
console.log(kilo);

