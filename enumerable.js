let friends = [ "chandler", "monica" ,"rachel", "ross", "joey", "phoebe"]
friends.addNew = "gunther";
Object.defineProperty(
    friends, "new", { 
        value : "janice",
        enumerable : true
 }
)
// for in - gives the properties one by one, removes enumerable = false
for (let p in friends){
    console.log(p)
};
//for of - gives the values one by one
for (let p of friends){
    console.log(p)
};