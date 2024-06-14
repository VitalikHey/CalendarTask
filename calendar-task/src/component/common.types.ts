export class Address {
  id: number
  street: string
  homeNumber: number
  constructor(id: number, street: string, homeNumber: number) {
    this.id = id
    this.street = street
    this.homeNumber = homeNumber
  }
  public get getAddress(): string {
    return `${this.street} ${this.homeNumber}`;
  }
}
export class User {
  public id: number;
  public name: string;
  public email: string;
  public address: Address;

  constructor(id: number, name: string, email: string, address: Address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }
}
