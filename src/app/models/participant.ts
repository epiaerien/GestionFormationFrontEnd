import { Diplome } from "./diplome";
import { Formation } from "./formation";
import { Transaction } from "./transaction";
import { Utilisateurs } from "./utilisateurs";

export class Participant  extends Utilisateurs  {

    formations! : Formation[];
    transactions! : Transaction[];
    diplomes!: Diplome[];
}
