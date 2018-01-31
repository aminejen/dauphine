import { Component, OnInit } from '@angular/core';
import	{	Observable	}	from	'rxjs/Observable';
import	{	Departement	}	from	'../model/departement';
import { EbxEntityWrapper } from '../model/ebx-model/ebx-entity-wrapper';
import { EbxConfig } from '../model/ebx-model/ebx-config';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  ebxConfig:EbxConfig = new EbxConfig("DAUPHINEDataSpace","Dauphine","/root/Department");
  departmentcode : string;
  shortname : string;
  fullname : string;
  year :string = "2017 - 2018";
  msg : string ="";
  departements : any[];

  constructor(private dataService:DataService) { }

  submit(){
    var departement = new Departement(this.departmentcode,this.shortname,this.fullname,this.year);
    var request = new EbxEntityWrapper(departement);
    this.dataService.save(this.ebxConfig,request).subscribe(
        response => {
          this.msg="success!";
          this.resetValues();
        },
        error => {
          error.error.errors.forEach(e=>{this.msg = e.message})
        })
  }

  delete(entity:any){
      this.dataService.delete(this.ebxConfig,entity.content.departmentcode.content).subscribe(()=>{this.resetValues();});
  }

  resetValues(){
    this.dataService.get(this.ebxConfig).subscribe(response=>{this.departements=response.rows});
  }

  ngOnInit() {
    this.resetValues();
  }

}
