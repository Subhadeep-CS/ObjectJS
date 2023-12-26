const Person={
    name:"Subho",
    age:23,
    gender:"male",
};

//iterate using for in loop
for(let key in Person)
{
    //printing all key in console.
    // console.log(key);
    //printing all the value in console.
    console.log(Person.key);// you will get undefined.
    console.log(`The key is ${key} and the value is ${Person[key]}`);
}

//iterate object using Object.keys method.

console.log(Object.keys(Person));

const keys=Object.keys(Person);
for(let key of keys)
{
    console.log(`The key is ${key} and the value is ${Person[key]}`);
}