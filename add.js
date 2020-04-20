function* add(){
    const num=yield;
    yield 2 + num;
    yield 4 +num;
}

var generator = add()

console.log(generator.next());
console.log(generator.next(10));
console.log(generator.next());
console.log(generator.next());