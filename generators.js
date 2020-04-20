
function* gen(){
    yield 1,
    yield,
    yield 3,
    yield 5
}

var generator = gen();

generator.next();
generator.next();
generator.next();
console.log(generator.next());
console.log(generator.next());
