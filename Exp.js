class Expenses
{
    fname;
    famount;
    fdate;

    constructor(expname,expamount,expdate)
    {
        this.fname=expname;
        this.famount=expamount;
        this.fdate=expdate;
    }
    belowList()
    {
         const div = document.createElement('div');
         div.class="card";
         div.innerHTML= `<div class="card-header"></div>
                      <div class="card-body">
                      <div class="row">
                      <div class="col">
                      <strong>NAME : </strong>${this.fname} | <strong>AMOUNT : </strong>Rs ${this.famount} | <strong>DATE : </strong>${this.fdate}
                      </div>
                      </div>
                      </div> 
                     `;
                     document.querySelector('.explist').appendChild(div) 

    }
}



let form=document.querySelector('#ex-form');
let valid=1;

form.addEventListener('submit',(event)=>{
  
    let fname = document.getElementById('name').value;
    if(fname == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your name";
         valid=0;

    }
    if(!/^[a-zA-Z ]+$/.test(fname)){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter a Valid name";
         valid=0;
    }
    let famount = document.getElementById('amount').value;
    if(famount == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your amount";
         valid=0;
    }
    let fdate = document.getElementById('date').value;
    

    if(valid==1)
    {
        const exp=new Expenses(fname,famount,fdate)
        console.log(`Form Submitted`);
            console.log(`NAME : ${fname}`)
            console.log(`AMOUNT : Rs ${famount}`)
            console.log(`DATE : ${fdate}`)
            exp.belowList();
    }
    

    event.preventDefault();
})