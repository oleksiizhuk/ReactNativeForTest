// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calculateTotalPriceWithDiscount(price: any, discount: any): any {
  if (discount > 0) {
    return price - price * (discount / 100)
  } else {
    return price
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calculateTotalPrice(price: any, discount = 0): any {
  return price - price * (discount / 100)
}
export {}
