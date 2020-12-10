//1. create a string
let myString = 'Hello Momo'

//2. create an array 
let myArray = ['1','2','3','4']

//3. create an object

let myObject = {
    myName: 'hello',
    age: '18',
    address: 'walnut creek'
}

//4. concatenate two strings

var output = concatenateTwoString("stair","case");
console.log(output)

function concatenateTwoString(string1, string2){
    return string1+string2;
}

//5. String interpolation

var message1 = interpolate("turkey");
var message2 = interpolate("tofurkey");

function interpolate(favoriteFood){
    return "My favorite food is " +favoriteFood + "!"
}

//6. indexOf on a String
var ouput = indexOfString("environment","iron");
console.log(output) //->3

funtion indexOfString(string1,string2){
    return string1.indexOf(string2);
}

//7. split a string 
var output = splitArray("queue");
console.log(output)

function splitArray(str){
    return str.splitArray("");
}

//8. remove element from back of an array

var output = removeFromBack([1,2,3])
console.log(output)

function removeFromBack(arr){
    arr.pop()
    return arr
}

//9. Add element to end of the arr
var output = addBack([1,2,3])
console.log(output)

function addBack(arr,element){
    arr.push(element)
    return arr
}

//10. Remove an element from beginning of an array 

var output = removeFromFront([1,2,3]);
console.log(output) //--->2,3

function removeFromFront(arr){
    arr.shift()
    return arr
}

//11. Add an element from begining of an array

var output = addFront([1,2],3);
console.log(output)

function addToFront(arr,element){
    arr.unshift(element)
    return arr
}

//12. Using slice

function useSlice(array,start,end){
    return array.slice(start,end)
}

//13. Using Splice

function usingSplice(array,start, deletCount, item){
    return array.splice(start,deleteCount,item)
}

//14. indexOf an Array

function indexOf(array,item){
    return array.indexOf(item)
}

//15. Using join

function useJoin(array, string){
    return array.join(string)
}

//16. Add a proptery to an object

function addProperty(obj,key,value){
    obj[key] = value
    return obj
}

//17. Removing a property 

function removePropery(obj,key){
    delete obj[key]
    return obj
}

//18. Iterate over an object

function iterateOverObject(obj){
    for(const key in obj){
        console.log(obj[key])
    }
}

// 19. Use an object to count things

var output = countAllCharacter( 'banana' );
console.log(output); //---->{b:1. a:3, n:2}


function countAllCharacter(str){
    let output = {}
     
    for(let i=0; i<str.length; i++ ){
        if(output[str[i]] === undefined){
            output[str[i]] = 0
        }
        output[str[i]] ++
    }
    return output
}

//20. Convert a Complex Array to an object

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

var result = [
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

function transformEmployeeData(employeeData){
    let reuslt = []
    employeeData.forEach(function(item){
        let obj = {}

        item.forEach(function(names){
            obj[names[0]] = names[1]
        })
        result.push(obj)
    })
}
return result



//21. Convert an Object a Complex Array 

var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
  }

  var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]

  function convertObjectToArray(obj){
      let output = []
      for(const [key,value] of Object.entries(obj)){
          output.push([key,value])
      }

      return output
  }

  //22. Cumulative Challenge

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'


var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'


var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3,
    },
    'Carrie': {
      visits: 4
    }
  };
  
  function greetCustomer(firstName) {

    let greeting = ' '
       for(let keys in customerData){
           for(let values in customerData[keys]){
               if(keys === firstName && customerData[keys][values] === 1){
                greeting = 'Welcome back, ' + firstName + "! We're glad you liked us the first time!";
               }else if(keys === firstName && customerData[keys][values] >1 ){
                greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
               }(!(firstName in customerData)){
                greeting = 'Welcome! Is this your first time?';
              }
           }
       } 
       return greeting
  }