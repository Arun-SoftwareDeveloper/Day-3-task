//Json iterate over the loops
var employee=[{
    "id":"123",
    "name":"Arun",
    "role":"Full-Stack Developer",
},
{
    "id":"222",
    "name":"Ram",
    "role":"JavaScript Developer",

}]
console.log(employee[0]);
console.log(employee[1]);
//Now we interate over for loop
for(var i=0;i<employee.length;i++){
    console.log(employee[i].id);
    console.log(employee[i].name);
    console.log(employee[i].role);
}
//for each loop 
employee.forEach(employees => {
    if(employees.id=="123"){
        console.log("Yeah its is correct.Here is the id");
    }
    console.log(employees.id)
});
//for  in
for (const name in "Arun") {
    if (Object.hasOwnProperty.call("Arun", name)) {
        const user = "Arun"[name];
        console.log("correct");
        console.log(user);   
    }

}
//for of loop
for (const iterator of "Full-Stack Developer") {
    console.log(iterator);
    
}