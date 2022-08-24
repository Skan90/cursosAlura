import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Rafael', 'r@r.com', '2022-08-28');
console.log(novoUser.exibirInfos());