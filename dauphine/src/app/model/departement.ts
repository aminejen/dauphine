import {EbxValue} from './ebx-model/ebx-value';
import {EbxEntity} from './ebx-model/ebx-entity';
export class Departement implements EbxEntity{

  departmentcode : EbxValue;
  shortname : EbxValue;
  fullname : EbxValue;
  year : EbxValue;


  constructor(departmentcode:string,shortname:string,fullname:string,year:string){
    this.departmentcode=new EbxValue(departmentcode);
    this.shortname=new EbxValue(shortname);
    this.fullname=new EbxValue(fullname);
    this.year=new EbxValue(year);
}

}
