import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Interceptor } from './interceptor/interceptor';
import { AuthService } from './service/auth.service'
import { DataService } from './service/data.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '',
      component: DepartementComponent
    }, {
      path: 'student',
      component: StudentComponent
    }
    ])
  ],
  providers: [
    AuthService,
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
