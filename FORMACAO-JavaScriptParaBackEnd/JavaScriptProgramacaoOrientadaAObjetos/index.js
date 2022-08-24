import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Rafael', 'r@r.com', '2022-08-28');
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Luis', 'l@l.com', '2022-08-24');
console.log(novoAdmin.nome);
novoAdmin.nome = 'Ana'; //sintaxe de propriedade
console.log(novoAdmin.nome);