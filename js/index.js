

// -----------  Typing animation  ------------

// let typed = new typed(".typing",{
//     Strings: ["web Designer", "web developer", "Graphic Designer"],
//     typeSpeed: 100,
//     BackSpeed : 60,
//     fadeOut: true,
//     loop:true,
// })

// -----------  Asside  ------------
const nav = document.querySelector(".nav")
const navList = document.querySelectorAll("li");
// console.log(navList);
    let totalNavList = navList.length;


const  allSection = document.querySelectorAll(".section")
    let totalSection = allSection.length;


    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        // console.log(a);
        a.addEventListener("click", function()
        {
            // for (let i = 0; i < totalSection; i++) {
            //     allSection[i].classList.remove("back-section")
                
            // }
            removeBackSection()
            for (let j = 0; j < totalNavList; j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {

                    addBackSection(j)
                    // console.log("back-section" + navList[j].querySelector("a"));
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active");
            showSection(this);
            if ( window.innerWidth < 1200) {
                asideSelectionTogglerBtn()
            }
            // console.log(this);
             
        }
        )
    }
    function removeBackSection(){
            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.remove("back-section")
                
            }
    }
    function  addBackSection(num) {
        allSection[num].classList.add("back-section")
        
    }
    function showSection(element){

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active")
            
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active")
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector('a').getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
            
        } 
    };
   const dadaSetMethod =  document.querySelector("#hireMe");
   console.log(dadaSetMethod);
    dadaSetMethod.addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this)
        updateNav(this)
        removeBackSection()
        addBackSection(sectionIndex)
    })
const navTogglerBtn = document.querySelector(".nav-toggler")
const aside  =document.querySelector(".aside")
        navTogglerBtn.addEventListener("click", () => {
            asideSelectionTogglerBtn()
        })

        function asideSelectionTogglerBtn(){
            aside.classList.toggle("open")
            navTogglerBtn.classList.toggle("open")
            for (let i = 0; i < totalSection; i++) {
                 allSection[i].classList.toggle("open")
                
            }
        }

        const dialogue = document.querySelector('.dialoges')
        console.log(val);

        val.addEventListener("click", () => {
            dialogue.showModal()
        })


