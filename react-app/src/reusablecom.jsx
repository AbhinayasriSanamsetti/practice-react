function    Random(){
    let num=Math.random()*100
    return <h1 style={{backgroundColor: 'lightgray'}}>Random number is {Math.round(num)}</h1>
}
export default Random;