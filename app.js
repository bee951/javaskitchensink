var name='Ben';
const states='50';
function add(num1, num2) {
    return num1+num2;
}
var sum=add(4,5);
console.log(sum);
console.log(states);
console.log(name);
function checkname(namec){
    var namenum=namec.charCodeAt(0);
    if (namenum==76) {
        return "Back of the line!";
    }else{
        return "Next!";
    }
}
/*first the function check the ASCII code of the Letter at the start of the string the compare it to the desired number then return a string based on that comparison */
var test=checkname(name);
console.log(test);
function sayHello(){

alert ('Hello world!');}
sayHello()
function checkage(person) {
    var age =person.age
    if(age<21){
    alert("Sorry "+person.name+", you aren't old enough to view this page!")} 

}
var visitor=[{name: 'Charles', age: 21},{name:'Abby', age:27},{name:'James', age: 18},{name:'John', age:17}];
checkage(visitor[0])
checkage(visitor[1])
checkage(visitor[2])
checkage(visitor[3])
var vegtables=['carrots', 'potatoes','onions']
for (let index = 0; index < vegtables.length; index++) {
    console.log(vegtables[index]);
}
var namecheck=[{name:'Fred',age:51},{name:'George',age:15},{name:'Ted',age:18},{name:'Bob',age:30},{name:'Orion',age:24}]
for (let index = 0; index < namecheck.length; index++) {
    checkage(namecheck[index]);
}
function getLength(String) {
    var Stringlength=String.length;
    return Stringlength
}
var StrLen=getLength('Hello World');
if (StrLen%2==0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}