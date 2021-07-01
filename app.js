console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let n = 1; n <= 100; n++);
{
    if (n % 2 == 1) {
        console.log(n);
    } else {
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let n = 1; n <= 100; n++);
{
    if (n % 3 == 0 && n % 5 == 0){
        console.log("FIZZBUZZ");
    } 
    else if (n % 3 == 0) 
    {
        console.log("FIZZ)");
    }
    else if (n % 5 == 0) 
    {
        console.log("BUZZ");
    }

    else {
        console.log(n);
    }
}

