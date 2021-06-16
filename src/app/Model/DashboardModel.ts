export class ChartData {
    CreatedDate: Date;
    Referred: number;
    Positive: number;
}

export class DashboardData{
    TotalPatients: number;
    NCPLabs: number;
    NCPClinics: number;
    VocationalTrainingAttendees: number;
    Districts: number;
    AlliedProviders: number;
    Labs: number;
    Clinics: number;
    chartData: ChartData[];
}