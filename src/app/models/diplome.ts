import { Formation } from "./formation"
import { Participant } from "./participant"

export class Diplome {

    id!:number

    nom!:string
    dateOpt!:Date
    formation!:Formation

    participant!:Participant


}
