import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  createVisitForm:FormGroup;
  APIUrl:string='https://sapidevapi.azurewebsites.net/api/'
  constructor(
    private _formbuilder: FormBuilder,
    private _service:ServiceService
  ) {
    this.createVisitForm = this._formbuilder.group({
      email: [null, Validators.required],
      processId: [null, Validators.required],
      sourceUId: [null, Validators.required],
      idNumber: [null, Validators.required],
      tnCsConfirmed: [null, Validators.required],
      cellphoneNumber:[null,Validators.required],
      source:[null,Validators.required]
      
    });
   }

  ngOnInit(): void {
  }
  createVisit(){
    console.log("formdata",this.createVisitForm.value)
    const url= this.APIUrl +'visit/createvisit'
    // const data =this.createVisitForm.value

    let payload={
      "email":this.createVisitForm.value.email,
      "processId":this.createVisitForm.value.processId,
      "sourceUId":this.createVisitForm.value.sourceUId,
      "idNumber":this.createVisitForm.value.idNumber,
      "tnCsConfirmed":this.createVisitForm.value.tnCsConfirmed,
      "source":this.createVisitForm.value.source,


      "firstName": "",
  "lastName": "",
  "cellphoneNumber":this.createVisitForm.value.cellphoneNumber,
  
  "maritalStatus": "",
 
 
  "introPage": false,
  "returnUrl": "",
  "webhookUrl": "",
  "income": 0,
  "creditReportSource": "",
  "creditReportDate": null,
  "monthlyDebtInstallment": 0,
  "totalDebtBalance": 0,
  "vehicleFinanceBalance": 0,
  "vehicleFinanceInstallment": 0,
  "bondBalance": 0,
  "bondInstallment": 0,
  "creditScore": 0,
  "dbC_DCRS": "",
  "dbC_Eligibility": "",
  "creditAccounts": "",
  "accountNumber": "",
  "creditorName": "",
  "balance": 0,
  "monthlyInstalment": 0
    }
    this._service.postService(url, payload).subscribe(res=>{
      console.log("res",res)
    })
     
  }
  }

