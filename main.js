#!/usr/bin/env node
// ARRAY ASSIGNMENTS 2
var products = [
    {
        name: "shirts",
        price: 1500, // creat at least three product object 
        inventory: {
            stock: 40,
            colorOption: ["Red", "Pink", "Blue", "White"],
        }
    },
    {
        name: "Gents",
        price: 3500,
        inventory: {
            stock: 70,
            colorOption: ["Grey", "Black"],
        }
    },
    {
        name: "wrist Watch",
        price: 500,
        inventory: {
            stock: 80,
            colorOption: ["Brown", "Green"],
        }
    },
];
function changeColor(products, newColor) {
    if (newColor == "Red") { // implement function to change color and
        var increasePercent10 = (products.price / 100) * 10; // adjust price based on new color
        products.price += increasePercent10;
    }
    else if (newColor == "Blue") {
        var decreasePercent5 = (products.price / 100) * 5;
        products.price -= decreasePercent5;
    }
}
products.forEach(function (products) {
    console.log("Product's name: ".concat(products.name)); // display each product name,available color, price and stock
    console.log("Price: ".concat(products.price));
    console.log("Limited stock: ".concat(products.inventory.stock));
    console.log("Avaiable colors : ".concat(products.inventory.colorOption, "\n"));
});
console.log("\n Change Color\n");
changeColor(products[0], "Red"); // call function
console.log(products[0]);
var students = [
    {
        name: "Misbah", // three student object
        grades: [56, 77, 88, 95],
    },
    {
        name: "Rehan",
        grades: [44, 55, 68, 82],
    },
    {
        name: "Sajid",
        grades: [54, 64, 69, 75],
    },
]; // function to calculate each student average grade.
function calculatorAverageGrade(grades) {
    var Average = grades.reduce(function (acc, grade) { return acc + grade; }, 0); // we used reduce method
    return Average / grades.length;
}
students.forEach(function (student) {
    var averageGrade = calculatorAverageGrade(student.grades); // print each student name and grade 
    console.log("Average Grade:  ".concat(student.name, " ,  ").concat(averageGrade));
});
var employee = [
    {
        name: "Ahsan",
        hoursWorked: 12, // at least 3 object(employee)
        hourlyRate: 10,
        salary: 0,
    },
    {
        name: "Rocky", // salary for each employee based
        hoursWorked: 22, //  on the hours worked and hourly rate  
        hourlyRate: 15,
        salary: 0,
    },
    {
        name: "Junaid",
        hoursWorked: 18,
        hourlyRate: 12,
        salary: 0,
    },
];
function calculateSalary(employee) {
    // implement a function to calculate salary
    var totalSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        totalSalary += totalSalary * 0.1; // 10% bonus (worked 20)
    }
    return totalSalary;
}
employee.forEach(function (employee) {
    var employeeSalary = calculateSalary(employee);
    console.log("The salary of employees is: [ name: ".concat(employee.name, " , salary: ").concat(employeeSalary, "]"));
});
console.log(employee);
