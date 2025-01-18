let users = [
  {
    id:"zero",
    username:"JohnDoe",
    email:"john@gmail.com",
    password:"password123",
  }
];

export const getUsers = () => users;

export const addUser = (user) => {
  users.push(user);
};

export const resetUsers = () => {
  users = [];
};
