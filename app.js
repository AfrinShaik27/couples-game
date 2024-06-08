console.group("js code is executing")
let couples=[
    {
        gf:'deepika',
        bf:'ranvir'
    },
    { 
        gf:'alia',
        bf:'ranbir'
    },
    { 
        gf:'anshuka',
        bf:'virat'
    },
    { 
        gf:'saniya',
        bf:'imran'
    },
    { 
        gf:'kaira adhvani',
        bf:'sidrath malohatra'
    },
    {
        gf:'kajal',
        bf:'gautam'
    },

];
console.log(couples)
let randomnumber=Math.floor(Math.random()*couples.length)
//console.log(couples[randomnumber].bf +"💖" +  couples[randomnumber].gf)
let result=document.getElementById("output")
//console.log(result)
function winnerOne()
{
    result.innerHTML=couples[randomnumber].bf +"💖" +  couples[randomnumber].gf
}
 function winnerTwo()
{
    result.innerHTML=couples[randomnumber].bf +"💖" +  couples[randomnumber].gf
}
 function winnerThree()
{
    result.innerHTML=couples[randomnumber].bf +"💖" +  couples[randomnumber].gf
}