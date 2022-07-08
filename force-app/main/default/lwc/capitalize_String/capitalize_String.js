import { LightningElement, track} from 'lwc';

export default class Capitalize_String extends LightningElement {
    @track changedName; 
    @track user_Input;
    capitalized_Input
    nameChange(event)
    {
        this.user_Input=event.target.value;
        // this.capitalized_Input=string.toUpperCase(this.user_Input);
    }

}