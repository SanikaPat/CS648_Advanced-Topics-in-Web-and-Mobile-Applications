let num1 = parseInt(prompt("Enter the 1st integer:"));
let num2 = parseInt(prompt("Enter the 2nd integer:"));

if (num1 > num2){
    document.write("The larger number is: "+num1);
} else if (num2 > num1){
    document.write("The larger number is: "+num2);
} else {
    document.write("Both numbers are equal: "+num1);
}