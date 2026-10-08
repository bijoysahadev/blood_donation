function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector("i");

    document.querySelectorAll(".faq-answer").forEach((item) => {
        if (item !== answer) item.classList.remove("active");
    });

    document.querySelectorAll(".faq-question i").forEach((item) => {
        if (item !== icon) item.style.transform = "rotate(0deg)";
    });

    answer.classList.toggle("active");
    icon.style.transform = answer.classList.contains("active")
        ? "rotate(180deg)"
        : "rotate(0deg)";
}
const stats=document.querySelectorAll(".stat-card h2")
const animateCount =(el)=> {
    const target = parseInt(el.innerText.replace(/\D/g,""))
    let count = 0
    const speed =target / 100
    const update =()=> {
        count += speed
        if (count<target){
            el.innerText=Math.floor(count).toLocaleString() + "+"
            requestAnimationFrame(update)
        }
        else {
            el.innerText =target.toLocaleString() + "+"
        }
    }
    update()
}
const obserser =  new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            animateCount(entry.target)
            obserser.unobserve(entry.target)
        }
    })
},
{
threshold:0.5
}
)
stats.forEach((stat)=> obserser.observe(stat) )
const menuBtn =document.querySelector(".mobile-menu-btn")
const navLinks =document.querySelector(".nav-links")
menuBtn.addEventListener("click",function (){
    navLinks.classList.toggle("active")
})
const ctabtn=document.querySelector(".cta-btn")
ctabtn.addEventListener("click",()=> {
    alert("Thank Your For Contacting")
})