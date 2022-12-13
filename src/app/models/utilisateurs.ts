import { Personne } from "./personne";
import { Role } from "./role";

export class Utilisateurs extends Personne {

    role!:Role;
    password!:string;
    username!:string;
}
