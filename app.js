const p1 = document.querySelector('#f_st');
const p2 = document.querySelector('#s_nd');
const s1 = document.querySelector('#f_stt');
const s2 = document.querySelector('#s_ntd');
const reset = document.querySelector('#reset');
const select = document.querySelector('#sel')
let p1score = 0;
let p2score = 0;
let w_score;
let g_over = false;
p1.addEventListener('click', () => {
    if(!g_over) {
    if (p1score != w_score) {
        p1score++;
        s1.textContent = p1score;
    }
    else
    {
    s1.classList.add('winner')
    s2.classList.add('loser')
    g_over = true
    }
}
});
p2.addEventListener('click', () => {
    if(!g_over) {
    if (p2score != w_score) {
        p2score++;
        s2.textContent = p2score;
    }
    else
    {
    s2.classList.add('winner')
    s1.classList.add('loser')
    g_over = true;
    }
}
})
reset.addEventListener('click',resett);
select.addEventListener('change',function(){
    w_score = parseInt(this.value);
    resett();
    //console.log(w_score)
    
})
function resett()
{
    g_over = false;
    p1score =0;
    p2score = 0;
    s1.textContent =0;
    s2.textContent =0;
    s1.classList.remove('winner','loser')
    


}
