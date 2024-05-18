const greetings = 'world';
export function hello(world:string = greetings){
    if (world == "WebAcademy") {
        return "Hi WebAcademy!";
    }  
    return `Hello ${world}!`;
}