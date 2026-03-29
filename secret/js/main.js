gsap.from(".one", 
{
  opacity: 0,
  y: 60,
  duration: 2,
  ease: "expo.inOut",
}
);
gsap.from(".two",
{
  opacity: 0,
  y: 60,
  duration: 2,
  ease: "expo.inOut",
  delay: 0.1
});
gsap.from(".three",
  {

  opacity: 0,
    y: 60,
    delay: 0.2,
    duration: 2,
    ease: "expo.inOut",
  });