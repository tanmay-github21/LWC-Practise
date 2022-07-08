import {LightningElement, track, wire,api} from 'lwc';
import fetchAccounts from '@salesforce/apex/fetch_Account_LWC.fetchAccounts';
import fetchContacts from '@salesforce/apex/fetch_Account_LWC.fetchContacts'; 
import {refreshApex} from'@salesforce/apex';
import {updateRecord} from 'lightning/uiRecordApi';
import {showToastEvent} from 'lightning/platformShowToastEvent'; 
const columns=[{label:'Name', fieldName:'Name'},
               {label:'Account Name', fieldName:'AccountId'}];
               
export default class ShowAccount_LWC extends LightningElement {
    _wiredAccount;
    contacts;
    columns=columns; 
    @wire(fetchAccounts) accounts;
    @wire (fetchContacts)contacts;
    // wiredContacts({error,data}){
    //     if(data)
    //     {
    //         console.log('Data Showed',data);
    //         this.contacts=data;
    //         this.error=undefined;
    //         console.log('Contacts Data', this.contacts);
    //     }
    //     else if(error)
    //     {
    //         this.error=error;
    //         this.contacts=undefined;
    //     }
    // }
}

    