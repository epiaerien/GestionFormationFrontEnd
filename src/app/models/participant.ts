import { Diplome } from "./diplome";
import { Formation } from "./formation";
import { Transaction } from "./transaction";

export class Participant {

    formations! : Formation[];
    transactions! : Transaction[];
    diplome!: Diplome;
}
