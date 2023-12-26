const User=[
    {userId:1,name:"Subho"},
    {userId:2,name:"Ram"},
    {userId:3,name:"Shyam"},
];

//print all the property of array inside object

for(let index in User)
{
    //console.log(User[index]); //it will print all the object inside array.
    
    console.log(`The value is ${User[index].userId} and name is ${User[index].name}`);
}

//using for of loop

for(let obj of User)
{
    console.log(obj);
    console.log(`This is ${obj.userId} and ${obj.name}`);
}

