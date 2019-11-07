class Customer {
  constructor(id, name, customerData) {
    this.id = id;
    this.name = name;
    this.customerData = customerData;
  }

  findName(id) {
    let customer = this.customerData.find(customer => customer.id === id)
    return customer.name
  }

  returnFirstNameOnly(id) {
    let fullName = this.findName(id)
    return fullName.split(' ')[0]
  }

}


export default Customer;
