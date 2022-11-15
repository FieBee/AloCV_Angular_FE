import {DateAt} from "./DateAt";

export interface Account extends DateAt{
  id? : number;
  userName? : string;
  password? : string;
  appRole? : any;
  status?: any;
  actice?: any;
}
