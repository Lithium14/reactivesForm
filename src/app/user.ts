export class User {

  name: string;
  email: string;
  password: string;
  street: string;
  zipCode: number;
  country: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
