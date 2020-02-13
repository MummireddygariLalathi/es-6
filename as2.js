greet=function (userName="lalathi"){
    console.log("Hello"+userName);
}
setTimeout(greet,2000);
setTimeout(()=>{greet("lal");},1000);
console.log("program Terminated");

