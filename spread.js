const Person1={
    name:"Subho",
    age: 23,
}

const Details={
    name:"Subhadeep",
    gender:"male",
};
//spraed the all properties and method of Person1 and Details inside the NewPerson Object.
const NewPerson={...Details,...Person1};
console.log(NewPerson);


//spread static item
const String1={..."abc"};
console.log(String1);
