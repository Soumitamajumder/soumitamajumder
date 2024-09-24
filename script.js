/*==================== typed js ====================*/

const typed = new Typed('.multiple-text',{
    strings:['Data Analyst','Data Analyst','Risk Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const progressBarFills = document.querySelectorAll('.progress-fill');
        const circleFills = document.querySelectorAll('.circle-fill');

        progressBarFills.forEach(fill => {
            fill.style.width = 0;
        });

        circleFills.forEach(fill => {
            fill.style.clipPath = 'polygon(50% 50%, 50% 0%)';
        });

        const animationDuration = 1000; // Animation duration in milliseconds

        setTimeout(() => {
            progressBarFills.forEach(fill => {
                fill.style.width = fill.parentElement.querySelector('.percentage').textContent + '%';
            });
        }, 500);

        setTimeout(() => {
            circleFills.forEach(fill => {
                fill.style.clipPath = 'polygon(50% 50%, 100% 0%, 100% 100%)';
            });
        }, 1500);



/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });}

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100)






/*===================Skill circle==============*/

const circles = document.querySelectorAll('.circle')
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points =" ";
    var rotate = 360 / dots;

    
    for(let i = 0 ; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg "></div>`;
    }
    elem.innerHTML=points; 

    const pointsMarked = elem.querySelectorAll('.points')
    for(let i = 0; i<percent; i++ ){
        pointsMarked[i].classList.add('marked')
    } 
})



// Function to initialize the circles' animation
function initCircleAnimation() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem => {
      var dots = elem.getAttribute("data-dots");
      var marked = elem.getAttribute("data-percent");
      var percent = Math.floor(dots * marked / 100);
      var points = " ";
      var rotate = 360 / dots;
  
      // Generate dots
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg "></div>`;
      }
      elem.innerHTML = points;
  
      // Mark the percentage of dots
      const pointsMarked = elem.querySelectorAll('.points');
      for (let i = 0; i < percent; i++) {
        setTimeout(() => {
          pointsMarked[i].classList.add('marked');
        }, i * 20); // Adding delay for smoother animation
      }
    });
  }
  
  // Function to remove the marked class to reset the animation
  function resetCircleAnimation() {
    const pointsMarked = document.querySelectorAll('.points.marked');
    pointsMarked.forEach(point => point.classList.remove('marked'));
  }
  
  // Intersection Observer to detect when the section comes into view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initCircleAnimation();  // Start the animation when in view
      } else {
        resetCircleAnimation();  // Reset the animation when out of view
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold to trigger the animation earlier or later
  
  // Target the skills section
  const skillsSection = document.getElementById('my-skills-section');
  observer.observe(skillsSection);

  

  window.addEventListener("scroll", function () {
    var skillsSection = document.getElementById("skills");
    var sectionPos = skillsSection.getBoundingClientRect().top;
    var screenPos = window.innerHeight;
  
    if (sectionPos < screenPos) {
      document.querySelector(".python").style.width = "70%";
      document.querySelector(".mysql").style.width = "80%";
      document.querySelector(".r").style.width = "65%";
    } else {
      document.querySelector(".python").style.width = "0";
      document.querySelector(".mysql").style.width = "0";
      document.querySelector(".r").style.width = "0";
    }
  });
  
  