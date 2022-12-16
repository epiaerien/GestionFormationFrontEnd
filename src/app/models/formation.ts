import { Formateur } from "./formateur";
import { Participant } from "./participant";

export class Formation {
    id!:number;
    nom!:string;
    dateDebut!:Date;
    dateFin!:Date;
    prix!:number;
    lieu!:string;
    formateur!:Formateur;
    participants!:Participant[]
}
