import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { ExpertSLAService, SLAService, SLATimeManagement } from 'src/app/Models/SLA Models/SLAService';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';

@Component({
  selector: 'app-service-legal-agrement',
  templateUrl: './service-legal-agrement.component.html',
  styleUrls: ['./service-legal-agrement.component.css']
})
export class ServiceLegalAgrementComponent implements OnInit {
  public slaServices: SLAService[] = [];
  constructor(private slaService: SlaService) { }

  ngOnInit() {
    this.getService();
  }

  getService() {
    this.slaService.getSLAServices(0).subscribe(response => {
      this.slaServices = response.outputObject;
    }, error => {
      console.log(error);
    });
  }
}
