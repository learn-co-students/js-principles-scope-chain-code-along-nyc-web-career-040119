var customerName = 'bob'
const leastFavoriteCustomer = 'edgar'

function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'not edgar'
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'edgar'
  // let favoriteCustomer = 'not edgar'
  throw SyntaxError('this lab is broken')
}
