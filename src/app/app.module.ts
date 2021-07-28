import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDatepickerModule, BsDropdownModule, CarouselModule, ModalModule, TabsModule, TimepickerModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { AnalysisReport1Component } from './Components/Analysis/analysis-report1/analysis-report1.component';
import { AnalysisReport2Component } from './Components/Analysis/analysis-report2/analysis-report2.component';
import { AnalysisReport3Component } from './Components/Analysis/analysis-report3/analysis-report3.component';
import { AnalysisReport5Component } from './Components/Analysis/analysis-report5/analysis-report5.component';
import { AnalysisPsycologistReportSentComponent } from './Components/Analysis/analysis-psycologist-report-sent/analysis-psycologist-report-sent.component';
import { AnalysisDocumentreportComponent } from './Components/Analysis/analysis-documentreport/analysis-documentreport.component';
import { AnalysisIdoxstatisticsComponent } from './Components/Analysis/analysis-idoxstatistics/analysis-idoxstatistics.component';
import { AnalysisIdoxstaffkpiComponent } from './Components/Analysis/analysis-idoxstaffkpi/analysis-idoxstaffkpi.component';
import { AnalysisEmailtasksComponent } from './Components/Analysis/analysis-emailtasks/analysis-emailtasks.component';
import { AnalysisErrortasksComponent } from './Components/Analysis/analysis-errortasks/analysis-errortasks.component';
import { AnalysisAssigntasksComponent } from './Components/Analysis/analysis-assigntasks/analysis-assigntasks.component';
import { AnalysisEmailtasksreportComponent } from './Components/Analysis/analysis-emailtasksreport/analysis-emailtasksreport.component';
import { AnalysisDailysummaryreportComponent } from './Components/Analysis/analysis-dailysummaryreport/analysis-dailysummaryreport.component';
import { CBTCMSNewinstructionsComponent } from './Components/CBT CMS/cbtcms-newinstructions/cbtcms-newinstructions.component';
import { CBTCMSOutstandingappointmentsComponent } from './Components/CBT CMS/cbtcms-outstandingappointments/cbtcms-outstandingappointments.component';
import { CBTCMSOutstandingexaminationsComponent } from './Components/CBT CMS/cbtcms-outstandingexaminations/cbtcms-outstandingexaminations.component';
import { CBTCMSOutstandingconfirmationComponent } from './Components/CBT CMS/cbtcms-outstandingconfirmation/cbtcms-outstandingconfirmation.component';
import { CBTCMSOutstandinginitialreportComponent } from './Components/CBT CMS/cbtcms-outstandinginitialreport/cbtcms-outstandinginitialreport.component';
import { CBTCMSUndertreatmentComponent } from './Components/CBT CMS/cbtcms-undertreatment/cbtcms-undertreatment.component';
import { CBTCMSOutstandingdischargereportComponent } from './Components/CBT CMS/cbtcms-outstandingdischargereport/cbtcms-outstandingdischargereport.component';
import { CBTCMSDnalistComponent } from './Components/CBT CMS/cbtcms-dnalist/cbtcms-dnalist.component';
import { CBTCMSClientlogComponent } from './Components/CBT CMS/cbtcms-clientlog/cbtcms-clientlog.component';
import { CBTCMSHoldcasesComponent } from './Components/CBT CMS/cbtcms-holdcases/cbtcms-holdcases.component';
import { ClinicsOutstandingcliniclistComponent } from './Components/Clinics/clinics-outstandingcliniclist/clinics-outstandingcliniclist.component';
import { ClinicsClinicavailabilitystatusComponent } from './Components/Clinics/clinics-clinicavailabilitystatus/clinics-clinicavailabilitystatus.component';
import { ClinicsClinicfillanalysisComponent } from './Components/Clinics/clinics-clinicfillanalysis/clinics-clinicfillanalysis.component';
import { ClinicsNewclinicrequiredComponent } from './Components/Clinics/clinics-newclinicrequired/clinics-newclinicrequired.component';
import { ClinicsFutureclinicrequiredComponent } from './Components/Clinics/clinics-futureclinicrequired/clinics-futureclinicrequired.component';
import { ClinicsClinicextensionrequiredComponent } from './Components/Clinics/clinics-clinicextensionrequired/clinics-clinicextensionrequired.component';
import { DiagnosticCMSNewinstructionsComponent } from './Components/Diagnostics CMS/diagnostic-cms-newinstructions/diagnostic-cms-newinstructions.component';
import { DiagnosticCMSOutstandingappointmentsComponent } from './Components/Diagnostics CMS/diagnostic-cms-outstandingappointments/diagnostic-cms-outstandingappointments.component';
import { DiagnosticCMSOutstandingexaminationsComponent } from './Components/Diagnostics CMS/diagnostic-cms-outstandingexaminations/diagnostic-cms-outstandingexaminations.component';
import { DiagnosticCMSDnalistComponent } from './Components/Diagnostics CMS/diagnostic-cms-dnalist/diagnostic-cms-dnalist.component';
import { DiagnosticCMSOutstandingreportsComponent } from './Components/Diagnostics CMS/diagnostic-cms-outstandingreports/diagnostic-cms-outstandingreports.component';
import { DiagnosticCMSOutstandingrecordComponent } from './Components/Diagnostics CMS/diagnostic-cms-outstandingrecord/diagnostic-cms-outstandingrecord.component';
import { DiagnosticCMSOutstandingpostComponent } from './Components/Diagnostics CMS/diagnostic-cms-outstandingpost/diagnostic-cms-outstandingpost.component';
import { DiagnosticCMSClientlogComponent } from './Components/Diagnostics CMS/diagnostic-cms-clientlog/diagnostic-cms-clientlog.component';
import { DiagnosticCMSHoldcasesComponent } from './Components/Diagnostics CMS/diagnostic-cms-holdcases/diagnostic-cms-holdcases.component';
import { DynamicsetupsDocumenttypesComponent } from './Components/Dynamic Setups/dynamicsetups-documenttypes/dynamicsetups-documenttypes.component';
import { DynamicsetupsFeetypesComponent } from './Components/Dynamic Setups/dynamicsetups-feetypes/dynamicsetups-feetypes.component';
import { DynamicsetupsIncidenttypesComponent } from './Components/Dynamic Setups/dynamicsetups-incidenttypes/dynamicsetups-incidenttypes.component';
import { DynamicsetupsOccupancytypesComponent } from './Components/Dynamic Setups/dynamicsetups-occupancytypes/dynamicsetups-occupancytypes.component';
import { DynamicsetupsOccupationsComponent } from './Components/Dynamic Setups/dynamicsetups-occupations/dynamicsetups-occupations.component';
import { DynamicsetupsSpecialitiesComponent } from './Components/Dynamic Setups/dynamicsetups-specialities/dynamicsetups-specialities.component';
import { DynamicsetupsEmailtasktypesComponent } from './Components/Dynamic Setups/dynamicsetups-emailtasktypes/dynamicsetups-emailtasktypes.component';
import { DynamicsetupsGeographicalcoverageComponent } from './Components/Dynamic Setups/dynamicsetups-geographicalcoverage/dynamicsetups-geographicalcoverage.component';
import { DynamicsetupsPhysiopostcodeComponent } from './Components/Dynamic Setups/dynamicsetups-physiopostcode/dynamicsetups-physiopostcode.component';
import { DynamicsetupsSystemtypeComponent } from './Components/Dynamic Setups/dynamicsetups-systemtype/dynamicsetups-systemtype.component';
import { DynamicsetupsErrortypeComponent } from './Components/Dynamic Setups/dynamicsetups-errortype/dynamicsetups-errortype.component';
import { DynamicsetupsEmailtypeComponent } from './Components/Dynamic Setups/dynamicsetups-emailtype/dynamicsetups-emailtype.component';
import { DynamicsetupsTaskcategoryComponent } from './Components/Dynamic Setups/dynamicsetups-taskcategory/dynamicsetups-taskcategory.component';
import { DynamicsetupsNewsComponent } from './Components/Dynamic Setups/dynamicsetups-news/dynamicsetups-news.component';
import { EntcmsNewinstructionsComponent } from './Components/ENT CMS/entcms-newinstructions/entcms-newinstructions.component';
import { EntcmsOutstandingappointmentsComponent } from './Components/ENT CMS/entcms-outstandingappointments/entcms-outstandingappointments.component';
import { EntcmsOutstandingamendmentsComponent } from './Components/ENT CMS/entcms-outstandingamendments/entcms-outstandingamendments.component';
import { EntcmsOutstandingexaminationsComponent } from './Components/ENT CMS/entcms-outstandingexaminations/entcms-outstandingexaminations.component';
import { EntcmsDnalistComponent } from './Components/ENT CMS/entcms-dnalist/entcms-dnalist.component';
import { EntcmsOutstandingreportsComponent } from './Components/ENT CMS/entcms-outstandingreports/entcms-outstandingreports.component';
import { EntcmsOutstandingrecordComponent } from './Components/ENT CMS/entcms-outstandingrecord/entcms-outstandingrecord.component';
import { EntcmsClinicschedueleComponent } from './Components/ENT CMS/entcms-clinicscheduele/entcms-clinicscheduele.component';
import { EntcmsPreviousclinicsComponent } from './Components/ENT CMS/entcms-previousclinics/entcms-previousclinics.component';
import { EntcmsClinicmanagerComponent } from './Components/ENT CMS/entcms-clinicmanager/entcms-clinicmanager.component';
import { EntcmsInstructionmanagerComponent } from './Components/ENT CMS/entcms-instructionmanager/entcms-instructionmanager.component';
import { EntcmsClientlogComponent } from './Components/ENT CMS/entcms-clientlog/entcms-clientlog.component';
import { EntcmsHoldcasesComponent } from './Components/ENT CMS/entcms-holdcases/entcms-holdcases.component';
import { ExpertsUserComponent } from './Components/Experts/experts-user/experts-user.component';
import { ExpertsExpertsagreementComponent } from './Components/Experts/experts-expertsagreement/experts-expertsagreement.component';
import { ExpertsMedcoexpertComponent } from './Components/Experts/experts-medcoexpert/experts-medcoexpert.component';
import { ExpertsMedcoexpertclinicsComponent } from './Components/Experts/experts-medcoexpertclinics/experts-medcoexpertclinics.component';
import { ExpertsPbclinicsComponent } from './Components/Experts/experts-pbclinics/experts-pbclinics.component';
import { ExpertsRehabexpertComponent } from './Components/Experts/experts-rehabexpert/experts-rehabexpert.component';
import { ExpertsRehabexpertclinicsComponent } from './Components/Experts/experts-rehabexpertclinics/experts-rehabexpertclinics.component';
import { ExpertsPsychologistexpertComponent } from './Components/Experts/experts-psychologistexpert/experts-psychologistexpert.component';
import { ExpertsPsychologistexpertclinicsComponent } from './Components/Experts/experts-psychologistexpertclinics/experts-psychologistexpertclinics.component';
import { ExpertsPsychologistvenueComponent } from './Components/Experts/experts-psychologistvenue/experts-psychologistvenue.component';
import { ExpertsOrthopaedicexpertComponent } from './Components/Experts/experts-orthopaedicexpert/experts-orthopaedicexpert.component';
import { ExpertsOrthopaedicexpertclinicsComponent } from './Components/Experts/experts-orthopaedicexpertclinics/experts-orthopaedicexpertclinics.component';
import { ExpertsOrthopaedicvenueComponent } from './Components/Experts/experts-orthopaedicvenue/experts-orthopaedicvenue.component';
import { ExpertsEntexpertComponent } from './Components/Experts/experts-entexpert/experts-entexpert.component';
import { ExpertsEntexpertclinicsComponent } from './Components/Experts/experts-entexpertclinics/experts-entexpertclinics.component';
import { ExpertsCbtexpertComponent } from './Components/Experts/experts-cbtexpert/experts-cbtexpert.component';
import { ExpertsCbtexpertclinicsComponent } from './Components/Experts/experts-cbtexpertclinics/experts-cbtexpertclinics.component';
import { ExpertsDiagnosticproviderComponent } from './Components/Experts/experts-diagnosticprovider/experts-diagnosticprovider.component';
import { ExpertsDiagnosticexpertclinicsComponent } from './Components/Experts/experts-diagnosticexpertclinics/experts-diagnosticexpertclinics.component';
import { InvoicesOutstandinginvoicesComponent } from './Components/Invoices/invoices-outstandinginvoices/invoices-outstandinginvoices.component';
import { InvoicesInvoicemanagerComponent } from './Components/Invoices/invoices-invoicemanager/invoices-invoicemanager.component';
import { InvoicesExpertclinicexpenseComponent } from './Components/Invoices/invoices-expertclinicexpense/invoices-expertclinicexpense.component';
import { MedcocmsNewinstructionsComponent } from './Components/Medco CMS/medcocms-newinstructions/medcocms-newinstructions.component';
import { MedcocmsOutstandingappointmentsComponent } from './Components/Medco CMS/medcocms-outstandingappointments/medcocms-outstandingappointments.component';
import { MedcocmsOutstandingamendmentsComponent } from './Components/Medco CMS/medcocms-outstandingamendments/medcocms-outstandingamendments.component';
import { MedcocmsOutstandinggprecordreviewComponent } from './Components/Medco CMS/medcocms-outstandinggprecordreview/medcocms-outstandinggprecordreview.component';
import { MedcocmsOutstandingpart35Component } from './Components/Medco CMS/medcocms-outstandingpart35/medcocms-outstandingpart35.component';
import { MedcocmsOutstandingexaminationsComponent } from './Components/Medco CMS/medcocms-outstandingexaminations/medcocms-outstandingexaminations.component';
import { MedcocmsOutstandingreportsComponent } from './Components/Medco CMS/medcocms-outstandingreports/medcocms-outstandingreports.component';
import { MedcocmsOutstandingrecordComponent } from './Components/Medco CMS/medcocms-outstandingrecord/medcocms-outstandingrecord.component';
import { MedcocmsOutstandingapprovalComponent } from './Components/Medco CMS/medcocms-outstandingapproval/medcocms-outstandingapproval.component';
import { MedcocmsDnalistComponent } from './Components/Medco CMS/medcocms-dnalist/medcocms-dnalist.component';
import { MedcocmsDnahistoryComponent } from './Components/Medco CMS/medcocms-dnahistory/medcocms-dnahistory.component';
import { MedcocmsClinicsschedueleComponent } from './Components/Medco CMS/medcocms-clinicsscheduele/medcocms-clinicsscheduele.component';
import { MedcocmsPreviousclinicsComponent } from './Components/Medco CMS/medcocms-previousclinics/medcocms-previousclinics.component';
import { MedcocmsClinicmanagerComponent } from './Components/Medco CMS/medcocms-clinicmanager/medcocms-clinicmanager.component';
import { MedcocmsInstructionmanagerComponent } from './Components/Medco CMS/medcocms-instructionmanager/medcocms-instructionmanager.component';
import { MedcocmsClientlogComponent } from './Components/Medco CMS/medcocms-clientlog/medcocms-clientlog.component';
import { MedcocmsMedicalexpertdocumentsComponent } from './Components/Medco CMS/medcocms-medicalexpertdocuments/medcocms-medicalexpertdocuments.component';
import { MedcocmsHoldcasesComponent } from './Components/Medco CMS/medcocms-holdcases/medcocms-holdcases.component';
import { OrthopaedicNewinstructionsComponent } from './Components/Orthopaedic CMS/orthopaedic-newinstructions/orthopaedic-newinstructions.component';
import { OrthopaedicOutstandingappointmentsComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingappointments/orthopaedic-outstandingappointments.component';
import { OrthopaedicOutstandingexaminationsComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingexaminations/orthopaedic-outstandingexaminations.component';
import { OrthopaedicOutstandingconfirmationComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingconfirmation/orthopaedic-outstandingconfirmation.component';
import { OrthopaedicOutstandingproformaComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingproforma/orthopaedic-outstandingproforma.component';
import { OrthopaedicOutstandingrecordComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingrecord/orthopaedic-outstandingrecord.component';
import { OrthopaedicOutstandingreferrerreportComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingreferrerreport/orthopaedic-outstandingreferrerreport.component';
import { OrthopaedicOutstandingrecordreviewComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingrecordreview/orthopaedic-outstandingrecordreview.component';
import { OrthopaedicOutstandingreportsComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingreports/orthopaedic-outstandingreports.component';
import { OrthopaedicOutstandingmedsecComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingmedsec/orthopaedic-outstandingmedsec.component';
import { OrthopaedicOutstandingorthoComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingortho/orthopaedic-outstandingortho.component';
import { OrthopaedicOutstandingamendmentsComponent } from './Components/Orthopaedic CMS/orthopaedic-outstandingamendments/orthopaedic-outstandingamendments.component';
import { OrthopaedicCourtscasesComponent } from './Components/Orthopaedic CMS/orthopaedic-courtscases/orthopaedic-courtscases.component';
import { OrthopaedicDnalistComponent } from './Components/Orthopaedic CMS/orthopaedic-dnalist/orthopaedic-dnalist.component';
import { OrthopaedicClinicsschedueleComponent } from './Components/Orthopaedic CMS/orthopaedic-clinicsscheduele/orthopaedic-clinicsscheduele.component';
import { OrthopaedicPreviousclinicsComponent } from './Components/Orthopaedic CMS/orthopaedic-previousclinics/orthopaedic-previousclinics.component';
import { OrthopaedicClinicmanagerComponent } from './Components/Orthopaedic CMS/orthopaedic-clinicmanager/orthopaedic-clinicmanager.component';
import { OrthopaedicInstructionmanagerComponent } from './Components/Orthopaedic CMS/orthopaedic-instructionmanager/orthopaedic-instructionmanager.component';
import { OrthopaedicClientlogComponent } from './Components/Orthopaedic CMS/orthopaedic-clientlog/orthopaedic-clientlog.component';
import { OrthopaedicHoldcasesComponent } from './Components/Orthopaedic CMS/orthopaedic-holdcases/orthopaedic-holdcases.component';
import { OrthopaedicStatusreportComponent } from './Components/Orthopaedic CMS/orthopaedic-statusreport/orthopaedic-statusreport.component';
import { PsychologistcmsNewinstructionsComponent } from './Components/Phsycologist CMS/psychologistcms-newinstructions/psychologistcms-newinstructions.component';
import { PsychologistcmsOutstandingappointmentsComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingappointments/psychologistcms-outstandingappointments.component';
import { PsychologistcmsAwaitingvideoappointmentsComponent } from './Components/Phsycologist CMS/psychologistcms-awaitingvideoappointments/psychologistcms-awaitingvideoappointments.component';
import { PsychologistcmsAwaitingvideoapprovalComponent } from './Components/Phsycologist CMS/psychologistcms-awaitingvideoapproval/psychologistcms-awaitingvideoapproval.component';
import { PsychologistcmsPrequestionnaireComponent } from './Components/Phsycologist CMS/psychologistcms-prequestionnaire/psychologistcms-prequestionnaire.component';
import { PsychologistcmsOutstandingexaminationsComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingexaminations/psychologistcms-outstandingexaminations.component';
import { PsychologistcmsOutstandingconfirmationComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingconfirmation/psychologistcms-outstandingconfirmation.component';
import { PsychologistcmsOutstandingproformaComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingproforma/psychologistcms-outstandingproforma.component';
import { PsychologistcmsOutstandingrecordComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingrecord/psychologistcms-outstandingrecord.component';
import { PsychologistcmsOutstandingreferrerreportComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingreferrerreport/psychologistcms-outstandingreferrerreport.component';
import { PsychologistcmsOutstandingrecordreviewComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingrecordreview/psychologistcms-outstandingrecordreview.component';
import { PsychologistcmsCourtcasesComponent } from './Components/Phsycologist CMS/psychologistcms-courtcases/psychologistcms-courtcases.component';
import { PsychologistcmsOutstandingreportsComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingreports/psychologistcms-outstandingreports.component';
import { PsychologistcmsOutstandingmedsecComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingmedsec/psychologistcms-outstandingmedsec.component';
import { PsychologistcmsOutstandingpsychComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingpsych/psychologistcms-outstandingpsych.component';
import { PsychologistcmsOutstandingamendmentsComponent } from './Components/Phsycologist CMS/psychologistcms-outstandingamendments/psychologistcms-outstandingamendments.component';
import { PsychologistcmsDnalistComponent } from './Components/Phsycologist CMS/psychologistcms-dnalist/psychologistcms-dnalist.component';
import { PsychologistcmsClinicschedueleComponent } from './Components/Phsycologist CMS/psychologistcms-clinicscheduele/psychologistcms-clinicscheduele.component';
import { PsychologistcmsPreviousclinicsComponent } from './Components/Phsycologist CMS/psychologistcms-previousclinics/psychologistcms-previousclinics.component';
import { PsychologistcmsClinicmanagerComponent } from './Components/Phsycologist CMS/psychologistcms-clinicmanager/psychologistcms-clinicmanager.component';
import { PsychologistcmsInstructionmanagerComponent } from './Components/Phsycologist CMS/psychologistcms-instructionmanager/psychologistcms-instructionmanager.component';
import { PsychologistcmsClientlogComponent } from './Components/Phsycologist CMS/psychologistcms-clientlog/psychologistcms-clientlog.component';
import { PsychologistcmsHoldcasesComponent } from './Components/Phsycologist CMS/psychologistcms-holdcases/psychologistcms-holdcases.component';
import { PsychologistcmsStatusreportComponent } from './Components/Phsycologist CMS/psychologistcms-statusreport/psychologistcms-statusreport.component';
import { RehabcmsnewNewinstructionsComponent } from './Components/Rehab CMS New/rehabcmsnew-newinstructions/rehabcmsnew-newinstructions.component';
import { RehabcmsnewOutstandingappointmentsComponent } from './Components/Rehab CMS New/rehabcmsnew-outstandingappointments/rehabcmsnew-outstandingappointments.component';
import { RehabcmsnewOutstandingexaminationsComponent } from './Components/Rehab CMS New/rehabcmsnew-outstandingexaminations/rehabcmsnew-outstandingexaminations.component';
import { RehabcmsnewOutstandinginitialreportComponent } from './Components/Rehab CMS New/rehabcmsnew-outstandinginitialreport/rehabcmsnew-outstandinginitialreport.component';
import { RehabcmsnewUndertreatmentComponent } from './Components/Rehab CMS New/rehabcmsnew-undertreatment/rehabcmsnew-undertreatment.component';
import { RehabcmsnewOutstandingdischargereportComponent } from './Components/Rehab CMS New/rehabcmsnew-outstandingdischargereport/rehabcmsnew-outstandingdischargereport.component';
import { RehabcmsnewClinicsschedueleComponent } from './Components/Rehab CMS New/rehabcmsnew-clinicsscheduele/rehabcmsnew-clinicsscheduele.component';
import { RehabcmsnewClientlogComponent } from './Components/Rehab CMS New/rehabcmsnew-clientlog/rehabcmsnew-clientlog.component';
import { RehabcmsnewSuspendedComponent } from './Components/Rehab CMS New/rehabcmsnew-suspended/rehabcmsnew-suspended.component';
import { RehabcmsnewOnholdComponent } from './Components/Rehab CMS New/rehabcmsnew-onhold/rehabcmsnew-onhold.component';
import { RehabcmsoldNewinstructionsComponent } from './Components/Rehab CMS Old/rehabcmsold-newinstructions/rehabcmsold-newinstructions.component';
import { RehabcmsoldOutstandingappointmentsComponent } from './Components/Rehab CMS Old/rehabcmsold-outstandingappointments/rehabcmsold-outstandingappointments.component';
import { RehabcmsoldOutstandingexaminationsComponent } from './Components/Rehab CMS Old/rehabcmsold-outstandingexaminations/rehabcmsold-outstandingexaminations.component';
import { RehabcmsoldOutstandinginitialreportComponent } from './Components/Rehab CMS Old/rehabcmsold-outstandinginitialreport/rehabcmsold-outstandinginitialreport.component';
import { RehabcmsoldOutstandingdischargereportComponent } from './Components/Rehab CMS Old/rehabcmsold-outstandingdischargereport/rehabcmsold-outstandingdischargereport.component';
import { RehabcmsoldUndertreatmentComponent } from './Components/Rehab CMS Old/rehabcmsold-undertreatment/rehabcmsold-undertreatment.component';
import { RehabcmsoldClientlogComponent } from './Components/Rehab CMS Old/rehabcmsold-clientlog/rehabcmsold-clientlog.component';
import { RehabcmsoldSuspendedComponent } from './Components/Rehab CMS Old/rehabcmsold-suspended/rehabcmsold-suspended.component';
import { RehabcmsoldOnholdComponent } from './Components/Rehab CMS Old/rehabcmsold-onhold/rehabcmsold-onhold.component';
import { ReportsInstructionreportComponent } from './Components/Reports/reports-instructionreport/reports-instructionreport.component';
import { ReportsInstructiongraphComponent } from './Components/Reports/reports-instructiongraph/reports-instructiongraph.component';
import { ReportsBookingreportComponent } from './Components/Reports/reports-bookingreport/reports-bookingreport.component';
import { ReportsBookinggraphComponent } from './Components/Reports/reports-bookinggraph/reports-bookinggraph.component';
import { ReportsDnagraphComponent } from './Components/Reports/reports-dnagraph/reports-dnagraph.component';
import { ReportsDnareportComponent } from './Components/Reports/reports-dnareport/reports-dnareport.component';
import { ReportsBlockbookingreportComponent } from './Components/Reports/reports-blockbookingreport/reports-blockbookingreport.component';
import { ReportsStaffdiariesComponent } from './Components/Reports/reports-staffdiaries/reports-staffdiaries.component';
import { ReportsReferrerstatisticsComponent } from './Components/Reports/reports-referrerstatistics/reports-referrerstatistics.component';
import { ReportsReferrergraphComponent } from './Components/Reports/reports-referrergraph/reports-referrergraph.component';
import { ReportsInstructionupdateComponent } from './Components/Reports/reports-instructionupdate/reports-instructionupdate.component';
import { SettingsReferrerComponent } from './Components/Settings/settings-referrer/settings-referrer.component';
import { SettingsSleepingreferrerComponent } from './Components/Settings/settings-sleepingreferrer/settings-sleepingreferrer.component';
import { SettingsReferrerslotsComponent } from './Components/Settings/settings-referrerslots/settings-referrerslots.component';
import { SettingsExpertavailabilitysettingsComponent } from './Components/Settings/settings-expertavailabilitysettings/settings-expertavailabilitysettings.component';
import { SettingsSolicitorsComponent } from './Components/Settings/settings-solicitors/settings-solicitors.component';
import { SettingsSolicitorofficeComponent } from './Components/Settings/settings-solicitoroffice/settings-solicitoroffice.component';
import { SettingsTermsandconditionsComponent } from './Components/Settings/settings-termsandconditions/settings-termsandconditions.component';
import { SettingsAgreementComponent } from './Components/Settings/settings-agreement/settings-agreement.component';
import { SettingsModalitiesComponent } from './Components/Settings/settings-modalities/settings-modalities.component';
import { SoftwareerrorsSupportticketComponent } from './Components/Software Errors/softwareerrors-supportticket/softwareerrors-supportticket.component';
import { UserComponent } from './Components/Users/user/user.component';
import { GroupComponent } from './Components/Users/group/group.component';
import { SecurityQuestionComponent } from './Components/Users/security-question/security-question.component';
import { ApplicationConfigurationComponent } from './Components/Users/application-configuration/application-configuration.component';
import { UserPermissionComponent } from './Components/Users/user-permission/user-permission.component';
import { ApplicationScreenComponent } from './Components/Users/application-screen/application-screen.component';
import { ApplicationScreenObjectComponent } from './Components/Users/application-screen-object/application-screen-object.component';
import { AgingReportAllComponent } from './Components/Accounts/aging-report-all/aging-report-all.component';
import { AgingReportRehabComponent } from './Components/Accounts/aging-report-rehab/aging-report-rehab.component';
import { ClinicPaymentReportComponent } from './Components/Accounts/clinic-payment-report/clinic-payment-report.component';
import { AgingReportComponent } from './Components/Accounts/aging-report/aging-report.component';
import { AgingReportReferrerPsyschComponent } from './Components/Accounts/aging-report-referrer-psysch/aging-report-referrer-psysch.component';
import { AgingReportExpertPsyschComponent } from './Components/Accounts/aging-report-expert-psysch/aging-report-expert-psysch.component';
import { AgingReportReferrerOrthoComponent } from './Components/Accounts/aging-report-referrer-ortho/aging-report-referrer-ortho.component';
import { AgingReportExpertOrthoComponent } from './Components/Accounts/aging-report-expert-ortho/aging-report-expert-ortho.component';
import { AgingReportDOEPsychComponent } from './Components/Accounts/aging-report-doe-psych/aging-report-doe-psych.component';
import { FinancialBreakdownMedcoComponent } from './Components/Accounts/financial-breakdown-medco/financial-breakdown-medco.component';
import { FinancialBreakdownPsychComponent } from './Components/Accounts/financial-breakdown-psych/financial-breakdown-psych.component';
import { FinancialBreakdownOrthoComponent } from './Components/Accounts/financial-breakdown-ortho/financial-breakdown-ortho.component';
import { NewexpertComponent } from './Components/Settings/settings-newexpert/newexpert.component';
import { NewInstructionSettingComponent } from './Components/Instruction/new-instruction-setting.component';
import { ExpertPerformaComponent } from './Components/Experts/expert-performa/expert-performa.component';
import { MedicalSecretaryListComponent } from './Components/MedicalSecretary/medical-secretary-list/MedicalSecretaryList.component';
import { EditMedicalSecretaryComponent } from './Components/MedicalSecretary/edit-medical-secretary/EditMedicalSecretary.component';
import { ChooseExpertComponent } from './Components/Medical Performa/medical-performa/choose-expert/choose-expert.component';
import { ConfirmModalDialogComponent } from './Components/Medical Performa/confirmModalDialog/confirmModalDialog.component';
import { GeneratePerformaComponent } from './Components/Medical Performa/medical-performa/generate-performa/generate-performa.component';
import { DraftListComponent } from './Components/Medical Performa/medical-performa/draft-list/draft-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerformasSummaryComponent } from './Components/Medical Performa/medical-performa/performas-summary/performas-summary.component';
import { StepsComponent } from './Components/Experts/steps/steps.component';
import { ExpertBankChargesComponent } from './Components/Experts/expert-bank-charges/expert-bank-charges.component';
import { EpertBasicInfoComponent } from './Components/Experts/epert-basic-info/epert-basic-info.component';
import { ExpertUploadDocComponent } from './Components/Experts/expert-upload-doc/expert-upload-doc.component';
import { ExpertContactInfoComponent } from './Components/Experts/expert-contact-info/expert-contact-info.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ExpertChargesComponent } from './Components/Experts/expert-charges/expert-charges.component';
import { ExpertsListComponent } from './Components/Experts/experts-list/experts-list.component';
import { ExpertsDraftListComponent } from './Components/Experts/experts-draft-list/experts-draft-list.component';
import { OnlynumbersDirective } from './custom-validations/onlynumbers.directive';
import { AlphabetsOnlyDirective } from './custom-validations/AlphabetsOnly.directive';
import { ServiceLegalAgrementComponent } from './Components/Experts/expert-sla/service-legal-agrement/service-legal-agrement.component';
import { ServicesComponent } from './Components/Experts/expert-sla/services/services.component';
import { AvailabilityComponent } from './Components/Experts/expert-sla/availability/availability.component';
import { DnasComponent } from './Components/Experts/expert-sla/dnas/dnas.component';
import { AppointmentCancellationComponent } from './Components/Experts/expert-sla/appointment-cancellation/appointment-cancellation.component';
import { PaidAllowancesComponent } from './Components/Experts/expert-sla/paid-allowances/paid-allowances.component';
import { ViewProfileComponent } from './Components/Experts/view-profile/view-profile.component';
import { VenueLocationComponent } from './Components/Venue Location/venue-location/venue-location.component';
import { VenueLocationListComponent } from './Components/Venue Location/venue-location-list/venue-location-list.component';
import { NotAllowSepacialChatactorDirective } from './custom-validations/NotAllowSepacialChatactor.directive';
import { VenuLocationDetailComponent } from './Components/Venue Location/venu-location-detail/venu-location-detail.component';
import { AgmCoreModule } from '@agm/core';
import { DisableControlDirective } from './custom-validations/DisableControl.directive';
import { CreateReferrerComponent } from './Components/Referrer/create-referrer/create-referrer.component';
import { ReferrerDetailComponent } from './Components/Referrer/referrer-detail/referrer-detail.component';
import { ReferrerListComponent } from './Components/Referrer/referrer-list/referrer-list.component';
import { NewInstructionComponent } from './Components/Instruction Main/new-instruction/new-instruction.component';
import { RequiredMedicalRecordComponent } from './Components/Experts/required-medical-record/required-medical-record.component';
import { InstructionListComponent } from './Components/Instruction Main/instruction-list/instruction-list.component';
import { InstructionDetailComponent } from './Components/Instruction Main/instruction-detail/instruction-detail.component';
import { Select2Module } from 'ng2-select2';
import { ClinicsClinicplansComponent } from './Components/Clinics/clinics-clinicplans/clinics-clinicplans.component';
import { OutstandingAppointmentSchedualComponent } from './Components/Medco CMS/outstanding-appointment-schedual/outstanding-appointment-schedual.component';
import { InstructionStateComponent } from './Components/Instruction Main/instruction-state/instruction-state.component';
import { ClinicsTodayclinicsComponent } from './Components/Clinics/clinics-todayclinics/clinics-todayclinics.component';
import { ClinicsAttendedclinicsComponent } from './Components/Clinics/clinics-attendedclinics/clinics-attendedclinics.component';
import { InvalidControlScrollDirective } from './custom-validations/invalidControlScroll.directive';
import { AssignedMedicalSectretaryListComponent } from './Components/Medco CMS/assigned-medical-sectretary-list/assigned-medical-sectretary-list.component';
import { UnassignedMedicalSecretaryListComponent } from './Components/Medco CMS/unassigned-medical-secretary-list/unassigned-medical-secretary-list.component';
import { SchedualAppointmentsComponent } from './Components/Medco CMS/schedual-appointments/schedual-appointments.component';
import { NewMedicalSecretaryComponent } from './Components/MedicalSecretary/new-medical-secretary/new-medical-secretary.component';
import { NewlyAssignedComponent } from './Components/MedicalSecretary/newly-assigned/newly-assigned.component';
import { RecordReviewComponent } from './Components/MedicalSecretary/record-review/record-review.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [	
    AppComponent,
    DashboardComponent,
    AppLayoutComponent,
    LoginComponent,
    AnalysisReport1Component,
    AnalysisReport2Component,
    AnalysisReport3Component,
    AnalysisReport5Component,
    AnalysisPsycologistReportSentComponent,
    AnalysisDocumentreportComponent,
    AnalysisIdoxstatisticsComponent,
    AnalysisIdoxstaffkpiComponent,
    AnalysisEmailtasksComponent,
    AnalysisErrortasksComponent,
    AnalysisAssigntasksComponent,
    AnalysisEmailtasksreportComponent,
    AnalysisDailysummaryreportComponent,
    CBTCMSNewinstructionsComponent,
    CBTCMSOutstandingappointmentsComponent,
    CBTCMSOutstandingexaminationsComponent,
    CBTCMSOutstandingconfirmationComponent,
    CBTCMSOutstandinginitialreportComponent,
    CBTCMSUndertreatmentComponent,
    CBTCMSOutstandingdischargereportComponent,
    CBTCMSDnalistComponent,
    CBTCMSClientlogComponent,
    CBTCMSHoldcasesComponent,
    ClinicsOutstandingcliniclistComponent,
    ClinicsClinicavailabilitystatusComponent,
    ClinicsClinicfillanalysisComponent,
    ClinicsNewclinicrequiredComponent,
    ClinicsFutureclinicrequiredComponent,
    ClinicsClinicextensionrequiredComponent,
    ClinicsClinicplansComponent,
    ClinicsTodayclinicsComponent,
    ClinicsAttendedclinicsComponent,
    DiagnosticCMSNewinstructionsComponent,
    DiagnosticCMSOutstandingappointmentsComponent,
    DiagnosticCMSOutstandingexaminationsComponent,
    DiagnosticCMSDnalistComponent,
    DiagnosticCMSOutstandingreportsComponent,
    DiagnosticCMSOutstandingrecordComponent,
    DiagnosticCMSOutstandingpostComponent,
    DiagnosticCMSClientlogComponent,
    DiagnosticCMSHoldcasesComponent,
    DynamicsetupsDocumenttypesComponent,
    DynamicsetupsFeetypesComponent,
    DynamicsetupsIncidenttypesComponent,
    DynamicsetupsOccupancytypesComponent,
    DynamicsetupsOccupationsComponent,
    DynamicsetupsSpecialitiesComponent,
    DynamicsetupsEmailtasktypesComponent,
    DynamicsetupsGeographicalcoverageComponent,
    DynamicsetupsPhysiopostcodeComponent,
    DynamicsetupsSystemtypeComponent,
    DynamicsetupsErrortypeComponent,
    DynamicsetupsEmailtypeComponent,
    DynamicsetupsTaskcategoryComponent,
    DynamicsetupsNewsComponent,
    EntcmsNewinstructionsComponent,
    EntcmsOutstandingappointmentsComponent,
    EntcmsOutstandingamendmentsComponent,
    EntcmsOutstandingexaminationsComponent,
    EntcmsDnalistComponent,
    EntcmsOutstandingreportsComponent,
    EntcmsOutstandingrecordComponent,
    EntcmsClinicschedueleComponent,
    EntcmsPreviousclinicsComponent,
    EntcmsClinicmanagerComponent,
    EntcmsInstructionmanagerComponent,
    EntcmsClientlogComponent,
    EntcmsHoldcasesComponent,
    ExpertsUserComponent,
    ExpertsExpertsagreementComponent,
    ExpertsMedcoexpertComponent,
    ExpertsMedcoexpertclinicsComponent,
    ExpertsPbclinicsComponent,
    ExpertsRehabexpertComponent,
    ExpertsRehabexpertclinicsComponent,
    ExpertsPsychologistexpertComponent,
    ExpertsPsychologistexpertclinicsComponent,
    ExpertsPsychologistvenueComponent,
    ExpertsOrthopaedicexpertComponent,
    ExpertsOrthopaedicexpertclinicsComponent,
    ExpertsOrthopaedicvenueComponent,
    ExpertsEntexpertComponent,
    ExpertsEntexpertclinicsComponent,
    ExpertsCbtexpertComponent,
    ExpertsCbtexpertclinicsComponent,
    ExpertsDiagnosticproviderComponent,
    ExpertsDiagnosticexpertclinicsComponent,
    InvoicesOutstandinginvoicesComponent,
    InvoicesInvoicemanagerComponent,
    InvoicesExpertclinicexpenseComponent,
    MedcocmsNewinstructionsComponent,
    MedcocmsOutstandingappointmentsComponent,
    OutstandingAppointmentSchedualComponent,
    MedcocmsOutstandingamendmentsComponent,
    MedcocmsOutstandinggprecordreviewComponent,
    MedcocmsOutstandingpart35Component,
    MedcocmsOutstandingexaminationsComponent,
    MedcocmsOutstandingreportsComponent,
    MedcocmsOutstandingrecordComponent,
    MedcocmsOutstandingapprovalComponent,
    MedcocmsDnalistComponent,
    MedcocmsDnahistoryComponent,
    MedcocmsClinicsschedueleComponent,
    MedcocmsPreviousclinicsComponent,
    MedcocmsClinicmanagerComponent,
    MedcocmsInstructionmanagerComponent,
    MedcocmsClientlogComponent,
    MedcocmsMedicalexpertdocumentsComponent,
    MedcocmsHoldcasesComponent,
    OrthopaedicNewinstructionsComponent,
    OrthopaedicOutstandingappointmentsComponent,
    OrthopaedicOutstandingexaminationsComponent,
    OrthopaedicOutstandingconfirmationComponent,
    OrthopaedicOutstandingproformaComponent,
    OrthopaedicOutstandingrecordComponent,
    OrthopaedicOutstandingreferrerreportComponent,
    OrthopaedicOutstandingrecordreviewComponent,
    OrthopaedicOutstandingreportsComponent,
    OrthopaedicOutstandingmedsecComponent,
    OrthopaedicOutstandingorthoComponent,
    OrthopaedicOutstandingamendmentsComponent,
    OrthopaedicCourtscasesComponent,
    OrthopaedicDnalistComponent,
    OrthopaedicClinicsschedueleComponent,
    OrthopaedicPreviousclinicsComponent,
    OrthopaedicClinicmanagerComponent,
    OrthopaedicInstructionmanagerComponent,
    OrthopaedicClientlogComponent,
    OrthopaedicHoldcasesComponent,
    OrthopaedicStatusreportComponent,
    PsychologistcmsNewinstructionsComponent,
    PsychologistcmsOutstandingappointmentsComponent,
    PsychologistcmsAwaitingvideoappointmentsComponent,
    PsychologistcmsAwaitingvideoapprovalComponent,
    PsychologistcmsPrequestionnaireComponent,
    PsychologistcmsOutstandingexaminationsComponent,
    PsychologistcmsOutstandingconfirmationComponent,
    PsychologistcmsOutstandingproformaComponent,
    PsychologistcmsOutstandingrecordComponent,
    PsychologistcmsOutstandingreferrerreportComponent,
    PsychologistcmsOutstandingrecordreviewComponent,
    PsychologistcmsCourtcasesComponent,
    PsychologistcmsOutstandingreportsComponent,
    PsychologistcmsOutstandingmedsecComponent,
    PsychologistcmsOutstandingpsychComponent,
    PsychologistcmsOutstandingamendmentsComponent,
    PsychologistcmsDnalistComponent,
    PsychologistcmsClinicschedueleComponent,
    PsychologistcmsPreviousclinicsComponent,
    PsychologistcmsClinicmanagerComponent,
    PsychologistcmsInstructionmanagerComponent,
    PsychologistcmsClientlogComponent,
    PsychologistcmsHoldcasesComponent,
    PsychologistcmsStatusreportComponent,
    RehabcmsnewNewinstructionsComponent,
    RehabcmsnewOutstandingappointmentsComponent,
    RehabcmsnewOutstandingexaminationsComponent,
    RehabcmsnewOutstandinginitialreportComponent,
    RehabcmsnewUndertreatmentComponent,
    RehabcmsnewOutstandingdischargereportComponent,
    RehabcmsnewClinicsschedueleComponent,
    RehabcmsnewClientlogComponent,
    RehabcmsnewSuspendedComponent,
    RehabcmsnewOnholdComponent,
    RehabcmsoldNewinstructionsComponent,
    RehabcmsoldOutstandingappointmentsComponent,
    RehabcmsoldOutstandingexaminationsComponent,
    RehabcmsoldOutstandinginitialreportComponent,
    RehabcmsoldOutstandingdischargereportComponent,
    RehabcmsoldUndertreatmentComponent,
    RehabcmsoldClientlogComponent,
    RehabcmsoldSuspendedComponent,
    RehabcmsoldOnholdComponent,
    ReportsInstructionreportComponent,
    ReportsInstructiongraphComponent,
    ReportsBookingreportComponent,
    ReportsBookinggraphComponent,
    ReportsDnagraphComponent,
    ReportsDnareportComponent,
    ReportsBlockbookingreportComponent,
    ReportsStaffdiariesComponent,
    ReportsReferrerstatisticsComponent,
    ReportsReferrergraphComponent,
    ReportsInstructionupdateComponent,
    SettingsReferrerComponent,
    SettingsSleepingreferrerComponent,
    SettingsReferrerslotsComponent,
    SettingsExpertavailabilitysettingsComponent,
    SettingsSolicitorsComponent,
    SettingsSolicitorofficeComponent,
    SettingsTermsandconditionsComponent,
    SettingsAgreementComponent,
    SettingsModalitiesComponent,
    SoftwareerrorsSupportticketComponent,
    UserComponent,
    GroupComponent,
    SecurityQuestionComponent,
    ApplicationConfigurationComponent,
    UserPermissionComponent,
    ApplicationScreenComponent,
    ApplicationScreenObjectComponent,
    AgingReportAllComponent,
    AgingReportRehabComponent,
    ClinicPaymentReportComponent,
    AgingReportComponent,
    AgingReportReferrerPsyschComponent,
    AgingReportExpertPsyschComponent,
    AgingReportReferrerOrthoComponent,
    AgingReportExpertOrthoComponent,
    AgingReportDOEPsychComponent,
    FinancialBreakdownMedcoComponent,
    FinancialBreakdownPsychComponent,
    FinancialBreakdownOrthoComponent,
    NewexpertComponent,
    NewInstructionSettingComponent,
    ExpertPerformaComponent,
    MedicalSecretaryListComponent,
    NewMedicalSecretaryComponent,
    EditMedicalSecretaryComponent,
    NewlyAssignedComponent,
    RecordReviewComponent,
    ChooseExpertComponent,
    GeneratePerformaComponent,
    ConfirmModalDialogComponent,
    DraftListComponent,
    PerformasSummaryComponent,
    StepsComponent,
    ExpertBankChargesComponent,
    EpertBasicInfoComponent,
    RequiredMedicalRecordComponent,
    ExpertUploadDocComponent,
    ExpertContactInfoComponent,
    ExpertChargesComponent,
    ExpertsListComponent,
    ExpertsDraftListComponent,
    ViewProfileComponent,
    ServiceLegalAgrementComponent,
    ServicesComponent,
    AvailabilityComponent,
    DnasComponent,
    AppointmentCancellationComponent,
    PaidAllowancesComponent,
    VenueLocationComponent,
    VenueLocationListComponent,
    VenuLocationDetailComponent,
    CreateReferrerComponent,
    ReferrerDetailComponent,
    ReferrerListComponent,
    NewInstructionComponent,
    InstructionListComponent,
    InstructionStateComponent,
    InstructionDetailComponent,
    AssignedMedicalSectretaryListComponent,
    UnassignedMedicalSecretaryListComponent,
    SchedualAppointmentsComponent,
    OnlynumbersDirective,
    AlphabetsOnlyDirective,
    NotAllowSepacialChatactorDirective,
    DisableControlDirective,
    InvalidControlScrollDirective,
   ],
  entryComponents: [
    ConfirmModalDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      progressBar: true,
    }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    ModalModule.forRoot(), 
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFHSyU_GvrwjXI9E9FmAl9PIPIlblwJ9I',
      libraries: ['places'] 
    }),
    Select2Module,
    PdfViewerModule,
    NgxGalleryModule
  ],
  providers: [AuthGuard, DatePipe
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: AuthInterceptor,
    //     multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
