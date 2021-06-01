var body = document.querySelector("body");
var back_project_btn = document.querySelector(".back_project") ;
var modal_1 = document.querySelector(".modal1");
var close_btn = document.querySelector(".close_btn");
var modal_content = document.querySelector(".modal_content");
var radio_btn_len = document.querySelectorAll(".rd").length;
var radio_btn = document.querySelectorAll(".rd");
var btm_btn = document.querySelectorAll(".btn_mod1");
var part1 = document.querySelectorAll(".q");
var dollar_btn = document.querySelectorAll(".pledge_dolla");
var form_txt = document.querySelectorAll(".form_txt");
var btn_at_btm = document.querySelectorAll(".buttons_at_btm input[type='number'] ");
var mod_btn = document.querySelectorAll(".mod_btn");
var modal2 = document.querySelector(".modal2");
var gotit_btn = document.querySelector(".y");
var backers = document.querySelector(".backers");
var skillbar = document.querySelector(".skillbar");
var error_msg = document.querySelectorAll(".error");
var amount = document.querySelector(".amt");
var bookmark_btn = document.querySelector(".bookmark");
var left_pledges = document.querySelectorAll(".ed1");
var span_elem = document.querySelectorAll(".ed1 span");
var somethang = document.querySelectorAll(".ed2");
var ham = document.querySelector(".ham")
var ham_modal = document.querySelector(".ham_modal")
var close_ham_btn = document.querySelector(".close_ham")
var free_btn = document.querySelector(".free_continue")
var color_path = document.querySelector(".bookmark button ")

bookmark_btn.addEventListener("click" , ()=>{
  bookmark_btn.classList.toggle("bookmarked_btn") ;
  bookmark_btn.classList.toggle("bookmark_color")
  bookmark_text()
//   console.log(bookmark_btn.textContent)
});

function bookmark_text(){
    if(color_path.textContent == "Bookmark"){
       color_path.textContent = "Bookmarked"
    }
    else{
       color_path.textContent="Bookmark"
    }
}

back_project_btn.addEventListener("click" , ()=>{
    modal_1.style.display = "block";    
    body.style.overflow = "hidden";
});

close_btn.addEventListener("click" , ()=>{
    modal_1.style.display = "none";
    body.style.overflow = "scroll";
    close_all();
});

modal_1.addEventListener("click" , ()=>{
    modal_1.style.display ="none";
    body.style.overflow = "scroll";       
    close_all();
});

modal_content.addEventListener("click", (e)=>{
    e.stopPropagation();    
});


for(let i=0 ; i<radio_btn_len ; i++){
    radio_btn[i].addEventListener("click" , ()=>{
        close_all_except(i);      
        modal_btn(i);  
    });
    
}

function modal_btn(idx){
    btm_btn[idx].style.display ="flex";
    part1[idx].style.border = " 2px solid hsl(176, 50%, 47%)"
}

function close_all_except(idx){
    for(let i=0 ; i<radio_btn_len ; i++){
        if(i!=idx){
            btm_btn[i].style.display ="none";
            part1[i].style.border="";
        }
    }
}


function close_all(){
    for(let i=0 ; i<=2; i++){
        radio_btn[i].checked = false;
        // console.log(radio_btn[i]);
        btm_btn[i].style.display ="none";
        part1[i].style.border="";   
        // console.log(error_msg[i]); 
        dollar_btn[i].value = ""; 
        form_txt[i].style.border = "";
        error_msg[i].style.display = "none"; 
    }
   
}

// var input_val = [];

for(let i=1 ; i<=btn_at_btm.length ; i++){
    // console.log(i)
    console.log(form_txt[i])
    form_txt[i-1].addEventListener("click" , ()=>{
        // console.log(error_msg[i])
        // console.log(dollar_btn[i])
        form_txt[i-1].style.border =" 2px solid hsl(176, 50%, 47%)" ;  
        error_msg[i-1].style.display = "none"; 
        dollar_btn[i-1].value = "";
        // input_val.push(dollar_btn[i].value );

        // console.log(dollar_btn[i].value);
    });
}

// console.log(input_val);
//continue button

const array = [25 , 75];

// console.log(array[0]);
var left_pldg;
var valuee;
var new_money ;
var  amt_value = amount.dataset.value
for(let i=1; i<=2 ; i++){
    // console.log(i)
    mod_btn[i].addEventListener("click" ,()=>{
        // console.log(mod_btn[i])
        // console.log(dollar_btn[i-1].value);

        valuee = dollar_btn[i-1].value ;
        if(dollar_btn[i-1].value < array[i-1] ) {
            error_msg[i-1].style.display = "block"; 
            form_txt[i-1].style.border =" 2px solid hsl(0, 93%, 68%)" ; 
        }
        else{
            modal_1.style.display = "none";
            modal2.style.display = "block";
            new_money = parseInt(amt_value) + parseInt(valuee) ;
            amt_value = new_money;
            // console.log(new_money)\
            left_pldg = parseInt(left_pledges[i-1].textContent) -1 ;
            left_pledges[i-1].textContent = left_pldg;
            somethang[i-1].textContent = left_pldg;
            UIchanges();   
        }
        
    });
}

// console.log(value_amt);

var new_backers = parseInt(backers.textContent) ;

// var new_money = parseInt(amount.textContent) + value ;

st = getComputedStyle(skillbar)
var new_width = parseInt(st.width) ;
    // console.log(st.width);

function UIchanges(){
    new_backers+=1;
    backers.textContent = new_backers;
    amount.textContent = `$${new_money}` ;
    new_width += 10;
    new_width = new_width/500 * 100;
    skillbar.style.width = `${new_width}%` ;

    console.log(new_width); 
    // skillbar.style.width = ""
}

modal2.addEventListener("click" , ()=>{
    modal2.style.display = "none";
    body.style.overflow = "scroll"; 
    close_all();
});

// console.log(skillbar.style.width);

// charar marar
// localStorage.setItem("name" , [
//     "ehmlo",
//     "kabadiwaliyeahhh"
// ]);

free_btn.addEventListener("click" , ()=>{
    modal_1.style.display = "none";
    modal2.style.display = "block";
    // backers.textContent= new_backers?
})

//hamburger

ham.addEventListener("click" , ()=>{
    ham_modal.style.display = "block";    
    ham.style.display="none"
    close_ham_btn.style.display="block";
})

close_ham_btn.addEventListener("click" , ()=>{
    ham_modal.style.display="none";
    close_ham_btn.style.display = "none"
    ham.style.display="block"
})

