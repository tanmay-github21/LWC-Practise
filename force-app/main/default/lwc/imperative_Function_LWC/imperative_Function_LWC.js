import {LightningElement, track} from 'lwc';
import fetchProject from '@salesforce/apex/fetch_Account_LWC.fetchProject'
export default class Imperative_Function_LWC extends LightningElement {
    @track projects; 
    @track error; 
    handleonload()
    {
        fetchProject()
        .then(result => {this.projects= result;})

        .catch(error =>{this.error=error;}) ; 
    }
}