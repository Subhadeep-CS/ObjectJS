const User=[
    {id:1,name:"subho"},
    {id:2,name:"Ram"},
    {id:3,name:"Shyam"},
]

//I want to know name of first object and last object 

const [{name:firstObjName}, ,{name:lastObjName}]=User;

console.log(firstObjName);
console.log(lastObjName);