export class User {
  public id: number;
  public name: string;
  public email: string;
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export class Address {
  public id: number;
  public street: string;
  public homeNumber: number;

  constructor(id: number, street: string, homeNumber: number) {
    this.id = id;
    this.street = street;
    this.homeNumber = homeNumber;
  }
}
