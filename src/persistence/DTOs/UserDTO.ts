class UserDTO {
  id: string;
  email: string;
  password: string;
  name: string;
  address: string;
  age: number;
  phoneNumber: string;
  picture: string;
  isAdmin: boolean;

  constructor(user: any) {
    this.id = user._id;
    this.email = user.name;
    this.password = user.password;
    this.name = user.name;
    this.address = user.address;
    this.age = user.age;
    this.phoneNumber = user.phoneNumber;
    this.picture = user.picture;
    this.isAdmin = user.isAdmin;
  }

  toJson() {
    const userDisplayed = {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      address: this.address,
      age: this.age,
      number: this.phoneNumber,
      picture: this.picture,
      isAdmin: this.isAdmin,
    };
    return userDisplayed;
  }
}

export default UserDTO;
