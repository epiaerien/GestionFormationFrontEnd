import { Formateur } from "./formateur";

export class Formation {
    id!:number;
    nom!:string;
    dateDebut!:Date;
    dateFin!:Date;
    prix!:number;
    lieu!:string;
    formateur!:Formateur
}
