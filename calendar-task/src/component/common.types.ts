export class User {
  public id: number;
  public name: string;
  public email: string;
  public address: { id: number; street: string; homeNumber: number };

  constructor(id: number, name: string, email: string, address: {
    id: number;
    street: string;
    homeNumber: number;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }

  public get Address(): string {
    return `${this.address.street} ${this.address.homeNumber}`;
  }
}
