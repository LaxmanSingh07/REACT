//component always follow the PascalCase naming convention
function Message()
{
    // JSX: JavaScript XML 
    // Transpiler will convert JSX to JS

    const name = "John";
    if(name)
    return (<h1>Hello {name}</h1>);
    else{
        return (<h1>Hello World</h1>);
    }

}

export default Message;