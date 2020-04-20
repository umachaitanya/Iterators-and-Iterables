function* outerGenerator(){
    yield 1 ;
    yield* innerGenerator() ;
    yield 2 ;
    yield 4 ;
}
function* innerGenerator(){
    yield "a" ;

    yield "b" ;
    yield "c" ;
}

var generator = outerGenerator()

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());