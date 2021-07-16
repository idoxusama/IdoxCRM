import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AuthGuard} from './auth/auth.guard';
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
import { MedicalSecretary } from './Models/Experts Model/MedicalSecretary';
import { MedicalSecretaryListComponent } from './Components/MedicalSecretary/medical-secretary-list/MedicalSecretaryList.component';
import { EditMedicalSecretaryComponent } from './Components/MedicalSecretary/edit-medical-secretary/EditMedicalSecretary.component';
import { ChooseExpertComponent } from './Components/Medical Performa/medical-performa/choose-expert/choose-expert.component';
import { DraftListComponent } from './Components/Medical Performa/medical-performa/draft-list/draft-list.component';
import { GeneratePerformaComponent } from './Components/Medical Performa/medical-performa/generate-performa/generate-performa.component';
import { PerformasSummaryComponent } from './Components/Medical Performa/medical-performa/performas-summary/performas-summary.component';
import { ExpertsListComponent } from './Components/Experts/experts-list/experts-list.component';
import { ExpertsDraftListComponent } from './Components/Experts/experts-draft-list/experts-draft-list.component';
import { ServiceLegalAgrementComponent } from './Components/Experts/expert-sla/service-legal-agrement/service-legal-agrement.component';
import { ViewProfileComponent } from './Components/Experts/view-profile/view-profile.component';
import { VenueLocationComponent } from './Components/Venue Location/venue-location/venue-location.component';
import { VenueLocationListComponent } from './Components/Venue Location/venue-location-list/venue-location-list.component';
import { VenuLocationDetailComponent } from './Components/Venue Location/venu-location-detail/venu-location-detail.component';
import { CreateReferrerComponent } from './Components/Referrer/create-referrer/create-referrer.component';
import { ReferrerListComponent } from './Components/Referrer/referrer-list/referrer-list.component';
import { ReferrerDetailComponent } from './Components/Referrer/referrer-detail/referrer-detail.component';
import { NewInstructionComponent } from './Components/Instruction Main/new-instruction/new-instruction.component';
import { InstructionListComponent } from './Components/Instruction Main/instruction-list/instruction-list.component';
import { InstructionDetailComponent } from './Components/Instruction Main/instruction-detail/instruction-detail.component';
import { ClinicsClinicplansComponent } from './Components/Clinics/clinics-clinicplans/clinics-clinicplans.component';
import { OutstandingAppointmentSchedualComponent } from './Components/Medco CMS/outstanding-appointment-schedual/outstanding-appointment-schedual.component';
import { InstructionStateComponent } from './Components/Instruction Main/instruction-state/instruction-state.component';
import { ClinicsTodayclinicsComponent } from './Components/Clinics/clinics-todayclinics/clinics-todayclinics.component';
import { ClinicsAttendedclinicsComponent } from './Components/Clinics/clinics-attendedclinics/clinics-attendedclinics.component';
import { AssignedMedicalSectretaryListComponent } from './Components/Medco CMS/assigned-medical-sectretary-list/assigned-medical-sectretary-list.component';
import { UnassignedMedicalSecretaryListComponent } from './Components/Medco CMS/unassigned-medical-secretary-list/unassigned-medical-secretary-list.component';
import { SchedualAppointmentsComponent } from './Components/Medco CMS/schedual-appointments/schedual-appointments.component';
import { NewMedicalSecretaryComponent } from './Components/MedicalSecretary/new-medical-secretary/new-medical-secretary.component';
import { NewlyAssignedComponent } from './Components/MedicalSecretary/newly-assigned/newly-assigned.component';

const routes: Routes = [
  {
    path:'',redirectTo: 'login', pathMatch: 'full'
  },
  {
    // path: 'dashboard', 
    //     component: AppLayoutComponent,
    //     children: [
    //       { path: '', component: DashboardComponent, pathMatch: 'full', canActivate:[AuthGuard]}
    //     ]
    path: 'dashboard', 
        component: AppLayoutComponent,
        children: [
          { path: '', component: DashboardComponent, pathMatch: 'full' , canActivate:[AuthGuard]}
        ]
  },
  {
   
    path: 'Instruction/Setting', 
        component: AppLayoutComponent,
        children: [
          { path: '', component: NewInstructionSettingComponent, pathMatch: 'full' , canActivate:[AuthGuard]}
        ]
  },
{
  path: 'Analysis/Report1',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisReport1Component, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/Report2',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisReport2Component, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/Report3',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisReport3Component, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/Report5',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisReport5Component, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/PsychologistReportSent',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisPsycologistReportSentComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/DocumentReport',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisDocumentreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/IdoxStatistics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisIdoxstatisticsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/IdoxStaffKPI',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisIdoxstaffkpiComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/EmailTasks',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisEmailtasksComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/ErrorTasks',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisErrortasksComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/AssignTasks',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisAssigntasksComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/EmailTasksReport',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisEmailtasksreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Analysis/DailySummaryReport',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AnalysisDailysummaryreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/New_Instructions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSNewinstructionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Outstanding_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Outstanding_Confirmation',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSOutstandingconfirmationComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Outstanding_Initial_Reports',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSOutstandinginitialreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Under_Treatment',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSUndertreatmentComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Outstanding_Discharge_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSOutstandingdischargereportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/DNA_List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSDnalistComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'CBT_CMS/Hold_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CBTCMSHoldcasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/Outstanding_Clinic_List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsOutstandingcliniclistComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/TodayClinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsTodayclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/AtendedClinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsAttendedclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/Clinic_Availability_Status',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsClinicavailabilitystatusComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/Clinic_Fill_Analysis',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsClinicfillanalysisComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/New_Clinic_Required',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsNewclinicrequiredComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/Future_Clinic_Required',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsFutureclinicrequiredComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Clinics/Clinic_Extention_Required',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsClinicextensionrequiredComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/New_Instructions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSNewinstructionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/Outstanding_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/DNA_List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSDnalistComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/Outstanding_Reports',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSOutstandingreportsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/Outstanding_Records',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSOutstandingrecordComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/Outstanding_Post',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSOutstandingpostComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DiagnosticsCMS/Hold_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DiagnosticCMSHoldcasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Document_Types',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsDocumenttypesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Fee_Types',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsFeetypesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Incident_Types',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsIncidenttypesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Occupancy_Types',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsOccupancytypesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Occupations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsOccupationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Specialities',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsSpecialitiesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Email_Task_Types',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsEmailtasktypesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Geographical_Coverage',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsGeographicalcoverageComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Physio_Postcode',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsPhysiopostcodeComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/System_Type',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsSystemtypeComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Error_Type',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsErrortypeComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Email_Type',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsEmailtypeComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/Task_Category',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsTaskcategoryComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'DynamicSetups/News',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DynamicsetupsNewsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/New_Instructions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsNewinstructionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Outstanding_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Outstanding_Amendments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsOutstandingamendmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/DNA_List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsDnalistComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Outstanding_Reports',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsOutstandingreportsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Outstanding_Record',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsOutstandingrecordComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Clinics_Schedule',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsClinicschedueleComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Previous_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsPreviousclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Clinic_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsClinicmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Instruction_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsInstructionmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'ENT_CMS/Hold_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EntcmsHoldcasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/User',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsUserComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/profile',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ViewProfileComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/list',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/drafts',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsDraftListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/clinicplan',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicsClinicplansComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},

{
  path: 'Experts/sla',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ServiceLegalAgrementComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},

{
  path: 'Experts/Experts_Agreement',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsExpertsagreementComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Medco_Expert',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsMedcoexpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Medco_Expert_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsMedcoexpertclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/PB_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsPbclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Rehab_Expert',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsRehabexpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Rehab_Expert_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsRehabexpertclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Psychologist_Expert',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsPsychologistexpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Psychologist_Expert_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsPsychologistexpertclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Psychologist_Venue',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsPsychologistvenueComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Orthopaedic_Expert',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsOrthopaedicexpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Orthopaedic_Expert_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsOrthopaedicexpertclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Orthopaedic_Venue',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsOrthopaedicvenueComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/ENT_Expert',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsEntexpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/ENT_Expert_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsEntexpertclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/CBT_Expert',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsCbtexpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/CBT_Expert_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsCbtexpertclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Diagnostic_Provider',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsDiagnosticproviderComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Diagnostic_Expert_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertsDiagnosticexpertclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Experts/Expert_Performa',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ExpertPerformaComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalSecretary/AddNew',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: NewMedicalSecretaryComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalSecretary/List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedicalSecretaryListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalSecretary/Edit/:id',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: EditMedicalSecretaryComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalSecretary/NewlyAssigned',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: NewlyAssignedComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalPerforma/Generate',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: GeneratePerformaComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalPerforma/Performa',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ChooseExpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalPerforma/DraftList',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: DraftListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedicalPerforma/Summary',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PerformasSummaryComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Invoices/Outstanding_Invoices',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: InvoicesOutstandinginvoicesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Invoices/Invoice_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: InvoicesInvoicemanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Invoices/Expert_Clinic_Expense',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: InvoicesExpertclinicexpenseComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'IndoxCMS/Intruction/NewInstruction',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: NewInstructionComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'IndoxCMS/Intruction/List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: InstructionListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'IndoxCMS/Intruction/Detail',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: InstructionDetailComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'IndoxCMS/Intruction/InstructionsState',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: InstructionStateComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Appointments/Schedual',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OutstandingAppointmentSchedualComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Appointments/Scheduled',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SchedualAppointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/AssignedMedicalSecretaries',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AssignedMedicalSectretaryListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/UnAssignedMedicalSecretaries',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: UnassignedMedicalSecretaryListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Amendments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandingamendmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_GP_Record_Review',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandinggprecordreviewComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Part_35',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandingpart35Component, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/DNA_List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsDnalistComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/DNA_History',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsDnahistoryComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Reports',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandingreportsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Record',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandingrecordComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Outstanding_Approval',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsOutstandingapprovalComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Clinics_Schedule',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsClinicsschedueleComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Previous_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsPreviousclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Clinic_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsClinicmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Instruction_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsInstructionmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Medical_Expert_Documents',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsMedicalexpertdocumentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'MedcoCMS/Hold_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: MedcocmsHoldcasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/New_Instructions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicNewinstructionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Appointment',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Confirmation',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingconfirmationComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Proforma',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingproformaComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Record',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingrecordComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Out_Referrer_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingreferrerreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Record_Review',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingrecordreviewComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Court_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicCourtscasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Reports',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingreportsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Med_Sec',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingmedsecComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/>Outstanding_Ortho',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingorthoComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Outstanding_Amendments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicOutstandingamendmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/DNA_List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicDnalistComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Clinics_Schedule',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicClinicsschedueleComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Previous_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicPreviousclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Clinic_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicClinicmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Instruction_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicInstructionmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Hold_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicHoldcasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'OrthopaedicCMS/Status_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: OrthopaedicStatusreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/New_Instructions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsNewinstructionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Awaiting_Video_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsAwaitingvideoappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Awaiting_Video_Approval"',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsAwaitingvideoapprovalComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Pre_Questionnaire',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsPrequestionnaireComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Confirmation',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingconfirmationComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Proforma',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingproformaComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Record',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingrecordComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Out_Referrer_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingreferrerreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Record_Review',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingrecordreviewComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Court_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsCourtcasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Reports',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingreportsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Med_Sec',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingmedsecComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Psych',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingpsychComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Outstanding_Amendments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsOutstandingamendmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/DNA_List',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsDnalistComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Clinics_Schedule',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsClinicschedueleComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Previous_Clinics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsPreviousclinicsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Clinic_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsClinicmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Instruction_Manager',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsInstructionmanagerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Hold_Cases',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsHoldcasesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'PhsycologistCMS/Status_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: PsychologistcmsStatusreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/New_Instructions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewNewinstructionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Outstanding_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Outstanding_Initial_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewOutstandinginitialreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Under_Treatment',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewUndertreatmentComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Outstanding_Discharge_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewOutstandingdischargereportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Client_Scheduele',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewClinicsschedueleComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/Suspended',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewSuspendedComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_New/On_Hold',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsnewOnholdComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/New_Instructions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldNewinstructionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/Outstanding_Appointments',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldOutstandingappointmentsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/Outstanding_Examinations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldOutstandingexaminationsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/Outstanding_Initial Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldOutstandinginitialreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/Under_Treatment',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldUndertreatmentComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/Outstanding_Discharge_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldOutstandingdischargereportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/Client_Log',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldClientlogComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/Suspended',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldSuspendedComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'RehabCMS_Old/On_Hold',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: RehabcmsoldOnholdComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Instruction_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsInstructionreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Instruction_Graph',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsInstructiongraphComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Booking_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsBookingreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Booking_Graph',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsBookinggraphComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/DNA_Graph',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsDnagraphComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/DNA_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsDnareportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Block_Booking_Report',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsBlockbookingreportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Staff_Dairies',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsStaffdiariesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Referrer_Statistics',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsReferrerstatisticsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Referrer_Graph',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsReferrergraphComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Reports/Instruction_Update',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReportsInstructionupdateComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Sleeping_Referrer',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsSleepingreferrerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Expert_Availability_Settings',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsExpertavailabilitysettingsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/VenueLocation',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: VenueLocationComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/VenueLocations',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: VenueLocationListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/VenueLocationDetail',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: VenuLocationDetailComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Referrer',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: CreateReferrerComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Referrers',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReferrerListComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/ReferrerDetail',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ReferrerDetailComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Referrer_Slots',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsReferrerslotsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Solicitors',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsSolicitorsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Solicitor_Office',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsSolicitorofficeComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Terms_and_Conditions',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsTermsandconditionsComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Agreement',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsAgreementComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/Modalities',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SettingsModalitiesComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Settings/NewExpert',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: NewexpertComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'SoftwareErrors/Support_Tickets',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SoftwareerrorsSupportticketComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Users/User',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: UserComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Users/Group',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: GroupComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Users/SecurityQuestion',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: SecurityQuestionComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Users/ApplicationConfiguration',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ApplicationConfigurationComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Users/UserPermission',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: UserPermissionComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Users/ApplicationsScreen',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ApplicationScreenComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Users/ApplicationScreenObject',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ApplicationScreenObjectComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReportAll',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportAllComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReportRehab',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportRehabComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/ClinicPaymentReport',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: ClinicPaymentReportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReport',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReportReferrerPsysch',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportReferrerPsyschComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReportExpertPsysch',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportExpertPsyschComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReportReferrerOrtho',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportReferrerOrthoComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReportExpertOrtho',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportExpertOrthoComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/AgingReportDOEPsych',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: AgingReportDOEPsychComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/FinancialBreakdownMedco',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: FinancialBreakdownMedcoComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/FinancialBreakdownPsych',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: FinancialBreakdownPsychComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},
{
  path: 'Accounts/FinancialBreakdownOrtho',
  component: AppLayoutComponent,
  children: [
    {
      path: '', component: FinancialBreakdownOrthoComponent, pathMatch: 'full', canActivate:[AuthGuard]
    }
  ]
},


{ 
  path: 'login', 
  component: LoginComponent
},
 { path: '**', redirectTo: 'dashboard' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
