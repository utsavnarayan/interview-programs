function taxCalculator(salary, taxSlabs)
{
var leftSalary = salary;
var tax = 0;
for(var i=0;i<taxSlabs.length;i++)
{
if(taxSlabs[i].length==1)
{
var taxableSalary = (leftSalary>taxSlabs[i][1]?taxSlabs[i][1]:leftSalary);
tax+= (taxableSalary* taxSlabs[i][0]);
leftSalary -=taxableSalary;
}
else
{
tax+=(leftSalary*taxSlabs[i][0]);
}
}

return tax;
}


taxCalculator(800,[[.15,1000],[.2,4000],[.25,2500],[.4]])
