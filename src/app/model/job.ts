export interface Job {
  id? : number
  name? : string;
  jobField? : any;
  salaryRange? : number;
  location? : any;
  position? : string;
  experience? : string;
  jobType? : string;
  expiredDate? : Date;
  description? : string;
  recruitNumber? : number;
  gender? : string;
  company?: any;
  status?: boolean
}
