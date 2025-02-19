interface Todos{
    id:number,
    title:string,
    description?:string
}


function MyTodoPrint(todo:Todos):void{
    // console.log(todo.title);
    printAll(todo);
}

function printAll(list:Todos):void{
    console.log(list.id);
    console.log(list.title);
    console.log(list.description? list.description: "no description");
}

MyTodoPrint({
    id: 33535,
    title: "dsfj",
    description: "3543k44kjtn4k"
});