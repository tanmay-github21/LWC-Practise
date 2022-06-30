import { LightningElement,api } from 'lwc';

export default class Clock_LWC extends LightningElement {
    timeStamp= new Date(); 
    @api refresh()
    {
        this.timeStamp= new Date(); 
    }
}