#!/usr/bin/env node
// ARRAY ASSIGNMENTS 2

// Part 1: Basic Array - Product Inventory
// // challenge:
// // You are tasked with creating a Product Inventory system. Implement Function and logic to
// // manage object manipulation effectively.

// // 1: Define a type alias named Product to represent a product with the following properties:
// //  : names(string) : The name of the product .
// // : price (number) : the price of the product.
// // : inventory (object) : An object containing inventory details including:
// // : stock(number): the number of the product available'
// // : colorOption t(string[]): An array listing available colors.
// // 2 : Creat an array named products containing at least three product object.Each product object
// // should include a name ,price,and inventory details.
// // 3 :implement the function  named changeColor the takes a product object and a new color as input.This
// // function should update the color property of the product and adjust the price based on the new color
// // (implement your own logic,e,g,increase by 10% for red, decrease by 5% for blue )
// // 4: Display each  product's name ,price ,stock,and available color. Iterate through the product array
// and print each product's detail.

type Product = {
  name: string
  price: number, // this is call properties (name,price,inventory)
  inventory: {
    stock: Number,            // nested object inventory
    colorOption: string[],
  };
};

let products: Product[] = [       // Array 
  {
    name: "shirts",
    price: 1500,                          // creat at least three product object 
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
function changeColor(products: Product, newColor: string) {
  if (newColor == "Red") {                                    // implement function to change color and
    let increasePercent10 = (products.price / 100) * 10;          // adjust price based on new color
    products.price += increasePercent10;
  } else if (newColor == "Blue") {
    let decreasePercent5 = (products.price / 100) * 5;
    products.price -= decreasePercent5;
  }
}
products.forEach((products) => {
  console.log(`Product's name: ${products.name}`);         // display each product name,available color, price and stock
  console.log(`Price: ${products.price}`);
  console.log(`Limited stock: ${products.inventory.stock}`);
  console.log(`Avaiable colors : ${products.inventory.colorOption}\n`);
});
console.log("\n Change Color\n");
changeColor(products[0], "Red"); // call function
console.log(products[0]);

// part 2: Multi- Dimensional array and tuples- student grades
// challenge:
// You tasked with creating a student grading system.Implement functions and logic to 
// manage student grades effectively.
// 1: Define a typescript types alias named Student to represent a student with the following properties.
// : name (string): the name of the student .
// : grades(number[]) : an array of gradesfor different objects
// 2: creat an array named student contaning at least three student objects.
// each student object should include a name and an array of grades.
// 3.Implement a function name calculateAverageGrade that takes a student's grade as input returns
// the average grade for the student.
// 4: display each student's named and average grade,Iterate through the student array,calculate the average grade
// for each student using the calculateAverageGrade function,and print their name and average grade:

type Student = {
  name: string;             // type alias
  grades: number[];
};
let students: Student[] = [
  {
    name: "Misbah",                  // three student object
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
];                                            // function to calculate each student average grade.
function calculatorAverageGrade(grades: number[]) {    
  let Average = grades.reduce((acc, grade) => acc + grade, 0); // we used reduce method
  return Average / grades.length;
}

students.forEach((student) => {
  let averageGrade = calculatorAverageGrade(student.grades);   // print each student name and grade 
  console.log(`Average Grade:  ${student.name} ,  ${averageGrade}`);
});

// part 3 : Array with types and indexing - Employee Salaries
// challenge:
// you are managing employee salaries for a company,Implement logic to calculate salaries and handle bonous
// 1: Define a type alias named Employee with this following properties
// : name (string) : The name of the employee.
// : hoursWorked(number): The number of the hours the employee worked.
// : hourlyRate (number): The hourly rate of the employee.
// :salary(number); The base salary of the employee
// 2: define an array named employees containing employee objects.Each employee object should include a name,
//    hoursWorked,hourlyRate,and salary
// 3:Impelment a function named calculateSalary that calculates the salary for each employee based
//  on the hours worked and hourly rate.
// 4: If an employee has worked 20 hours or more,apply a 10% bonus to their salary.

type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};
let employee: Employee[] = [  
  {
    name: "Ahsan",
    hoursWorked: 12, // at least 3 object(employee)
    hourlyRate: 10,
    salary: 0,
  },

  {
    name: "Rocky",            // salary for each employee based
    hoursWorked: 22,          //  on the hours worked and hourly rate  
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
function calculateSalary(employee: Employee) {    // implement a function to calculate salary
  let totalSalary = employee.hoursWorked * employee.hourlyRate;
  if (employee.hoursWorked >= 20) {
     totalSalary += totalSalary * 0.1 // 10% bonus (worked 20)
  }
  return totalSalary;
}
employee.forEach((employee) => {           // print each employee name and salary
  let employeeSalary = calculateSalary(employee);
  console.log(
    `The salary of employees is: [ name: ${employee.name} , salary: ${employeeSalary}]`
  );
});
console.log(employee);
