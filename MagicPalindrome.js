function magic(input)
{
var response=[];
response.push(input[input.length-1]);
for(var i=input.length-2;i>=0;i--)
{
for(var j=input.length-1;j>=i;j--)
{
response.push(input[i]);
response.unshift(input[i]);
}
}
console.log(response.join(''));
}


magic('abc'); //Returns aaabbcbbaaa
