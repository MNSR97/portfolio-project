window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//light/dark mode


//scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll",function(){
  scrollTopBtn.classList.toggle("active", window.scrollY > 5000);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


//nav menu active on oage roll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const sectionTop = current.offsetTop - 50;
  let id = current.getAttribute("id");

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
  }
  else{
    document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
      }
  });
