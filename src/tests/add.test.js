const add=(a,b)=>a+b;
const generateGreeting=(name)=>`Hello ${name}`

test('should add two numbers',()=>{
    const result=add(3,4)

    if(result !==7){
        throw new Error(`You add a and b, result is ${result}. Expect 7.`)
    }
})

test('Should show Hello someone!',()=>{
    const result=generateGreeting('Jen')
    
    expect(result).toBe('Hello Jen')
})