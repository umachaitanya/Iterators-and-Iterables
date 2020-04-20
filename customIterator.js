let person = {
    name:"uma",
    age:"22",
    role:"developer",
    company:"mphasis"
}

let count = -1;
let myGenerator = {
    //symbol.iterator is a unique value that cannot be duplicated
    //with that unique value, create function which returns an object
    [Symbol.iterator] : function(obj){ 
        return {
            next : ()=>{
                count++;
                switch(count){
                    case 0 : 
                    return {
                        value: obj.name,
                        done:false
                    }
                    case 1 : 
                    return {
                        value : obj.role,
                        done: false
                    }
                    case 2 :
                        return {
                            value: obj.age,
                            done:false
                        }
                    
                    case 3 :
                        return {
                            value: obj.company,
                            done:false
                        }
                    default :
                        return {
                                value: undefined,
                                done:true
                            }
                    }
                }
            }
        }
    }

//calling the generator function
let generatorData = myGenerator[Symbol.iterator](person);
console.log(generatorData.next());
console.log(generatorData.next());
console.log(generatorData.next());
console.log(generatorData.next());
console.log(generatorData.next());
console.log(generatorData.next());
console.log(generatorData.next());