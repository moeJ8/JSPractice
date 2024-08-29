function greet(name){
    const greeting = "Hello, ";

    function sayHello(){
        console.log(greeting + name);
    }
    return sayHello;
}
const greetjohn = greet("john");
const greetalice = greet("Alice");
greetjohn();
greetalice();
