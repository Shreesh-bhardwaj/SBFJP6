function sayhello(){
    console.log("Hello JS WORLD");
}
sayhello();

let a = function sum(num1, num2)
{
    return num1+num2;
}
console.log(a(2,3));

(function(n1,n2){
    console.log(n1*n2);
})(3,7);