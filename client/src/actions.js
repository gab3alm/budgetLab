export function addMoney(amount){
  return {
    type: 'ADD_MONEY',
    amount
  }
}

export function decMoney(amount){
  return {
    type: "DEC_MONEY",
    amount
  }
}