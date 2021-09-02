const person = {
    name: "Gregor",
    lastname: "Mandella",
    age: 34,
    roles: [
      { name: "Manager", method: "get" },
      { name: "Client", method: "post" },
      { name: "User", method: "get" },
    ],
    address: {
      address: {
        street: "3914 Woodruff Ave",
        location: "Oakland, CA 94602Glenview",
      },
      position: {
        lat: 123.221,
        lng: 124.544,
      },
    },
};
   const {name, lastname, age, roles, address: {address, position},} = person;
   const {roles: [item]} = person;

   const showPersonalInformation = (person) => {
    let information = "";
    information += `Nombres: ${name} \n`;
    information += `Apellidos: ${lastname} \n`;
    information += `Edad: ${age}`;
    return information;
   };
   const showRoles = (person) => {
    let information = "";
    const rol = roles;
    for (let i = 0; i < rol.length; i++) {
      information += `Nombre del rol ${rol[i].name} \n`;
      information += `Tipo del rol ${rol[i].method} \n`;
    }
    return information;
   };
   const getPosition = (person) => {
    return position;
   };
   const getFirstRol = (person) => {
    return item;
   };
   const getAddress = (person) => {
    return address;
    };
    const addIdUser = (person, id) => {
      return { ...person, id };
    };
    console.log(addIdUser(person, 123456));
// Primer Desafio
    /* const addInRoles = (item) => {
      return person.roles.push(item);
    };
    addInRoles({name: "User", method: "get"},) */
  
// Segundo Desafio
  const addInRoles = (roles, item) => {
    return [ ...roles, item];
  };
  console.log(addInRoles(roles, {name: "User", method: "get"},));

   const main = () => {
    console.log(showPersonalInformation(person));
    console.log(showRoles(person));
    console.log(getPosition(person));
    console.log(getFirstRol(person));
    console.log(getAddress(person));
   };
   export default main;
   