import { LightningElement, api, wire, track} from 'lwc';
import fetchAccounts from '@salesforce/apex/Show_Accounts_Lwc.fetchAccounts';
// const columns=[{label:'Account Name', field:'name'}, {label:'Account Id', field:'Id'}];
export default class Practise extends LightningElement {
   showData;
  @wire(fetchAccounts)
  showAccount(data, error)
  {
     if (data)
     {
       this.showData=data; 
       console.log('Got the following'+'\t'+data);
     }
     else if (error) 
     console.log('Error Occured'+'\t'+error);
  }
}