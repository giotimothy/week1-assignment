// Giorgio Timothy Suharianto
// JSCRIPT 320 - Week 1

import people from './people.json';

people.forEach((person) => {
  const { name, email, phone } = person;
  const NameArr = name.split(' ');
  const [firstName, lastName] = NameArr;
  const result = `
  First name: ${firstName}
  Last name: ${lastName}
  Email: ${email}
  Phone number: ${phone}`;
  console.log(result);
});
