interface PaymentProcessor {
  processPayment(amount: number): void
}

class CreditCard implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ${amount}`)
  }
}

class PayPal implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of ${amount}`)
  }
}

class PaymentSystem {
  process(paymentProcessor: PaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount)
  }
}

const paymentSystem = new PaymentSystem()
paymentSystem.process(new CreditCard(), 100) // Processing credit card payment of 100
paymentSystem.process(new PayPal(), 200) // Processing PayPal payment of 200

export {}
