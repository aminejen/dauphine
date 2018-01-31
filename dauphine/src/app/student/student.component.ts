import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from '../model/student';
import { EbxEntityWrapper } from '../model/ebx-model/ebx-entity-wrapper';
import { EbxConfig } from '../model/ebx-model/ebx-config';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  ebxConfig: EbxConfig = new EbxConfig("DAUPHINEDataSpace", "Dauphine", "/root/Student");
  matricule: string;
  lastname: string;
  firstname: string;
  msg: string = "";
  elements: any[];
  nextPage: string = "ebx-dataservices/rest/data/v1/BDAUPHINEDataSpace/Dauphine/root/Student?pageSize=10";
  previousPage: string;
  firstPage: string;
  lastPage: string;
  constructor(private dataService: DataService) { }

  submit() {
    var student = new Student(this.matricule, this.lastname, this.firstname);
    var request = new EbxEntityWrapper(student);
    this.dataService.save(this.ebxConfig, request).subscribe(
      response => {
        this.msg = "success!";
        this.next();
      },
      error => {
        error.error.errors.forEach(e => { this.msg = e.message })
      })
  }

  ngOnInit() {
    this.next()
  }

  delete(entity: any) {
    this.dataService.delete(this.ebxConfig, entity.content.matricule.content).subscribe(() => { this.next(); });
  }

  goToPage(page: string) {
    this.dataService.getPage(page)
      .subscribe(response => {
        this.elements = response.rows;
        this.nextPage = response.pagination.nextPage;
        this.previousPage = response.pagination.previousPage;
        this.firstPage = response.pagination.firstPage;
        this.lastPage = response.pagination.lastPage;
      });
  }

  next() {
    this.goToPage(this.nextPage);
  }
  previous() {
    this.goToPage(this.previousPage);
  }
  last() {
    this.goToPage(this.lastPage);
  }
  first() {
    this.goToPage(this.firstPage);
  }
}


