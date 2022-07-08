import { LightningElement, api} from 'lwc';

export default class Opportunity_Details extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields= ['Name', 'Amount', 'Type']; 
}