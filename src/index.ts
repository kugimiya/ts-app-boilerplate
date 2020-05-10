interface User {
  nickname: string;
  firstname: string;
  lastname: string;
}

function greeter(user: User): string {
  return `hello, @${user.nickname} (${user.firstname} ${user.lastname})`;
}

let myUser = {
  nickname: 'janeregurd144',
  firstname: 'Jane',
  lastname: 'Regurd'
};

console.log({ result: greeter(myUser) });