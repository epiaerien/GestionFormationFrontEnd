import { Commercial } from "./commercial";
import { Prospect } from "./prospect";

export class Appel {
    id!:number; 
    date!:Date; 
    commentaire!:string; 
    prospect!:Prospect; 
    commercial!:Commercial; 
}
