import { LightningElement,track,api} from 'lwc';
import active_Accounts from '@salesforce/apex/active_Inactive_Accounts.active_Accounts';
import inactive_Accounts from '@salesforce/apex/active_Inactive_Accounts.inactive_Accounts';
const columns=[{label:'Name', fieldName:'Name'},
               {label:'Account Status', fieldName:'Active__c'}];
export default class Parent_Child_Coms extends LightningElement {
    accounts_1; //Active accounts 
    accounts_2; // inactive accounts  
    error;
    @track user_Input
    @track tempList=[]; 
    columns=columns; 
    show_Active()
    {
        active_Accounts()
        .then(result =>{
            this.accounts_1= result; 
            this.accounts_1.forEach(item=>{
                var a={};
                a.id=item.Id;
                a.Name=item.Name;
                a.Active__c=item.Active__c; 
                this.tempList.push(a); 
            });
        })
        .catch(error => {console.log('Error Occured'+'\t'+error);})
    }
    show_Inactive()
     {
        inactive_Accounts()
        .then((result) => {this.accounts= result; this.error= error; }) 
        .catch((error) => {this.error=error; this.accounts=undefined;});
     }

     showValue()
     {
        
     }
}