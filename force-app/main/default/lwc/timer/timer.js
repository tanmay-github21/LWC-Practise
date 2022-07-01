import { LightningElement, track} from 'lwc';

export default class Timer extends LightningElement {
    @track hours;
    @track minutes;
    @track seconds; 
    @track time; 
    connectedCallback()
    {
        setTimeout(() => {
           this.showTime(); 
        }, 1000);
        
    }
    timeOutFunction()
    {

        const timeOut= setTimeout();
    }
    showTime()
    {
        let date=new Date(); 
        let duration="Am";
        console.log('Today date is'+date); 
        this.hours=date.getHours(); 
        this.minutes=date.getMinutes();
        this.seconds=date.getSeconds(); 
        this.hours=(this.hours>9) ? this.hours:"0"+this.hours; 
        this.minutes=(this.minutes<10) ? "0"+this.minutes : this.minutes 
        this.seconds=(this.seconds<10) ? "0"+this.seconds :this.seconds; 
        console.log('Hours',this.hours+'\n'+'Minutes'+'\t'+this.minutes+'\n'+'Seconds'+'\t'+this.seconds);
        this.time=this.hours+":"+this.minutes+":"+this.seconds;
    }
}