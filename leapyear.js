/*-------------------LeapYear----------------*/
function isLeapYear (year){
    if (year %4 ===0){
        return true;
    } 
    else{
        return false;
    }
}
const lipi =isLeapYear(2024);
console.log(lipi);

/*-------------------LeapYear-2----------------*/

function isLeapYear2(year){
    if (year % 100 !==0 && year %4 ===0){
        return true;
    }
    else if( year % 400===0){
        return true;
    }
    else {
        return false;
    }
}
const isLeap1 =isLeapYear2(2024)
const isLeap2 =isLeapYear2(2026)
const isLeap3 =isLeapYear2(2029)
console.log(isLeap1,isLeap2,isLeap3)