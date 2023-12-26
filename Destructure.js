const Band={
    bandName:"fossils",
    year:2018,
    famousSong:"hasnuhana",
};

//const {bandName,famousSong,year}=Band;

console.log(bandName);
console.log(famousSong);
console.log(year);

// const {bandName:var1,famousSong:var2}=Band;

// console.log(var1);
// console.log(var2);

const Band1={
    bandName:"fossils",
    famousSong:"hansuhana",
    year:2018,
    anotherSong:"khonro fossils",
};

const {bandName,famousSong,...restProps}=Band1;

console.log(restProps);

//restProps is a object.