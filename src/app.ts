const form = document.querySelector('.form') as HTMLFormElement;
const selector = document.querySelector('.selector') as HTMLSelectElement;
const tofrom = document.querySelector('.tofrom') as HTMLInputElement;
const details = document.querySelector('.details') as HTMLInputElement;
const amount = document.querySelector('.amount') as HTMLInputElement;
const output = document.querySelector('.output') as HTMLDivElement
const ul = document.querySelector('.info') as HTMLUListElement;


interface User{
    client:string;
    selector:string;
    dets:string;
    amount:number;
    login():string
}

class Customers implements User{
    client:string;
    selector:string;
    dets:string;
    amount:number;
    constructor(c:string,s:string,d:string,a:number){
        this.client = c;
        this.selector = s;
        this.dets = d;
        this.amount = a;
    }
    login():string{
        if(selector.value === 'Invoice'){
            return `The client ${this.client} wishes to receive ${this.selector.toLowerCase().trim()} for ${this.dets.toLowerCase().trim()}. The invoice includes ${this.amount} $`
        }
        else if(selector.value === 'Check account'){
            return `The client ${this.client} wishes to ${this.selector.toLowerCase().trim()} for ${this.dets.toLowerCase().trim()}. The check account includes ${this.amount} $`
        }
        else if(selector.value === 'Receive paycheck'){
            return `The client ${this.client} would like to ${this.selector.toLowerCase().trim()} for ${this.dets.toLowerCase().trim()}. The paycheck includes ${this.amount} $`
        }
        else{
            return `ERROR`
        }
    }
}
    

form.addEventListener('submit', (e:Event) =>{
    e.preventDefault();
    const customer = new Customers(tofrom.value, selector.value, details.value, amount.valueAsNumber)
    
    console.log(customer.login())
    
    const li:HTMLLIElement = document.createElement('li')
    li.innerText = customer.login()
    ul.append(li)
})