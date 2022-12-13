import { Utilisateurs } from "./utilisateurs";

export class Role {

    id!:number;
    nom!:String;
    utilisateurs! : Utilisateurs[];
}
