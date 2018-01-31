import {EbxValue} from './ebx-model/ebx-value';
import {EbxEntity} from './ebx-model/ebx-entity';
export class Student implements EbxEntity{

  matricule : EbxValue;
  lastname : EbxValue;
  firstname : EbxValue;



  constructor(matricule:string,lastname:string,firstname:string){
    this.matricule=new EbxValue(matricule);
    this.lastname=new EbxValue(lastname);
    this.firstname=new EbxValue(firstname);
}

}
