export class SearchJob{
  title: string;
  name: string;
  salaryRange: number;
  jobField: string;
  location: string;
  companyName: string;


  constructor(title: string, name: string, salaryRange: number, jobField: string, location: string, companyName: string) {
    this.title = title;
    this.name = name;
    this.salaryRange = salaryRange;
    this.jobField = jobField;
    this.location = location;
    this.companyName = companyName;
  }
}
