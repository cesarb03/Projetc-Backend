class OrderDTO {
  id: string;
  timestamp: number;
  user: string;
  products: [Object];
  status: string;

  constructor(newOrder: any) {
    this.id = newOrder._id;
    this.timestamp = newOrder.timestamp;
    this.user = newOrder.user;
    this.products = newOrder.products;
    this.status = newOrder.status;
  }

  toJson() {
    const orderDisplayed = {
      id: this.id,
      timestamp: this.timestamp,
      user: this.user,
      products: this.products,
      status: this.status,
    };
    return orderDisplayed;
  }
}

export default OrderDTO;
