import { Commercial } from "./commercial";
import { Prospect } from "./prospect";

export class RendezVous {

    id!:number;
    date!:Date;
    lieu!:string;
    prospect!:Prospect;
    commercial!:Commercial;

}
