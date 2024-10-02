const containerEl = document.querySelector(".container");
const imgEl = document.querySelector(".container__img");
const h1El = document.querySelector(".container__title");
const h1El2 = document.querySelector(".container__title-second");

const resetText = (callback, delay = 1000) => {
  setTimeout(() => {
    h1El.innerHTML = "";
    h1El2.innerHTML = "";

    callback();
  }, delay);
};

const tl = gsap.timeline({
  defaults: { ease: "power1.in", duration: 1 },
  onComplete: () => {
    resetText(() => {
      gsap
        .timeline({
          defaults: { ease: "power1.in", duration: 1 },
          onComplete: () => {
            resetText(() => {
              imgEl.src = "./assets/gordon_mouth.png";

              const dickImageEl = document.createElement("img");
              dickImageEl.src = "./assets/dick.jpg";
              dickImageEl.classList.add("dick-image");
              containerEl.appendChild(dickImageEl);

              const tl = gsap.timeline({
                defaults: { ease: "power1.in", duration: 1 },
              });

              tl.from(dickImageEl, {
                y: 100,
                opacity: 0,
              }).to(dickImageEl, {
                repeat: -1,
                duration: 0.25,
                y: -20,
                yoyo: true,
                ease: "power4.in",
              });
            });
          },
        })
        .to(h1El, {
          text: "А сейчас мне нужно поработать",
          duration: 3,
        });
    });
  },
});

tl.from(imgEl, { scale: 0, delay: 1.5 })
  .to(h1El, {
    text: "Я договорился!",
    duration: 2,
  })
  .to(h1El2, {
    text: "Война закончится через 1 час!",

    duration: 2,
  });
