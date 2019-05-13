/* Your code goes here */
customerName = 'bob';
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

const favoriteCustomer = 'Ali';

function changeLeastFavoriteCustomer()
{
  favoriteCustomer = 'ALI'
}

function attemptTwoFavoriteCustomers()
{
  let favoriteCustomer = 'ali';
  let favoriteCustomer = 'alI';
}
