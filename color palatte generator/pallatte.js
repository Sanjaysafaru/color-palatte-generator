const container= document.querySelector(".container")
const refreshbtn=document.querySelector(".refresh-btn")


const generatepallatte=() =>{
    container.innerHTML="";
    for(let i=0; i<12; i++){
        let randomhex="#" + Math.random().toString(16).slice(2, 8);
        randomhex=randomhex.toUpperCase();
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML=`<div class="rect-box" style="background-color:${randomhex}" ></div>
                         <span class="hex-value">${randomhex}</span>`;
        color.addEventListener("click",()=>copycolor(color,randomhex));
        container.appendChild(color);
    } 
}

const copycolor=(elem, hexvalue)=>{
    const colorelem=elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexvalue).then(()=>{
        colorelem.innerHTML="Copied";
        setTimeout(()=>colorelem.innerHTML=hexvalue,1000);
    } )

}
refreshbtn.addEventListener('click',generatepallatte);
window.onload=generatepallatte;