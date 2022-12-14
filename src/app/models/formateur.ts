import { Formation } from "./formation"
import { Utilisateurs } from "./utilisateurs";

export class Formateur extends Utilisateurs{


    dispo!:boolean; 
    formations!:Formation[]; 

}
