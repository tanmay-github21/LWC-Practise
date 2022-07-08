import { LightningElement, track, api} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
const columns=[{label:'Account Name', fieldName:'Name'}, {label:'Active', fieldName:'Active__c'}];
export default class ChildParentComs extends LightningElement {
    @track checkBox=false; 
    @api accounts; 
    @api activeRecords()
     {
          console.log('Child Function Executed'); 
          
     }
}