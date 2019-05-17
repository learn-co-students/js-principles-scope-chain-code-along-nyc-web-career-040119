/*something is wrong with code challenge test, code is correct but won't pass*/

/* Your code goes here */
customerName = 'bob';
const leastFavoriteCustomer = 'notali';
/*
upperCaseCustomerName()

    returns the customerName
    */
function upperCaseCustomerName() // function passes test it does not return anything...
{
  customerName = customerName.toUpperCase();
}

function setBestCustomer()
{
  bestCustomer = 'not bob';
}

function overWriteBestCustomer()
{
  bestCustomer = 'maybe bob'; // maynot though...
}

function changeLeastFavoriteCustomer()
{
  leastFavoriteCustomer = 'ila';

}

// function attemptTwoFavoriteCustomers()
// {
//   let favoriteCustomer = 'astone';
//   let favoriteCustomer = 'some other one';
// }
