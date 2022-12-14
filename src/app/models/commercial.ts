import { Appel } from "./appel";
import { RendezVous } from "./rendez-vous";
import { Utilisateurs } from "./utilisateurs";

export class Commercial extends Utilisateurs {

    rdv!:RendezVous[];
    appels! : Appel[];
}
