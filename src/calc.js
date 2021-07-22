function calc(operation)
{
    var answer
    var var1 = parseFloat(document.getElementById('inp1').value)
    var var2 = parseFloat(document.getElementById('inp2').value)

    if (operation==='add')
    {
        answer = var1+var2
    }
    if(operation==='sub')
    {
        answer = var1-var2
    }
    if(operation==='mul')
    {
        answer = var1*var2
    }
    if(operation==='div')
    {
        answer = var1/var2
    }
    document.getElementById('output').innerHTML = answer
}