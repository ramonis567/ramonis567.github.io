document.addEventListener('DOMContentLoaded', () => {
  let timeline = new TimelineMax();
  // Loader Exit
  timeline.fromTo(
    ".background-loader", 
    1, 
    {width: "100%",}, 
    {width: "0%", delay: 5, ease: Expo.easeInOut}
  ).fromTo(
    ".background-video", 
    2, 
    {width: "0%", opacity: 0}, 
    {width: "100%", opacity: 1, ease: Expo.easeInOut},
  ).fromTo(
    ".logo", 
    0.4, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}
  ).fromTo(
    ".nav-list", 
    0.4, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}
  ).fromTo(
    ".social-media", 
    0.4, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}
  ).fromTo(
    ".content", 
    0.4, 
    {x: -100, opacity: 0}, 
    {x: 0, opacity: 1, ease: Bounce.easeInOut}
  ).fromTo(
    ".img-spider", 
    0.8, 
    {width: "0%",}, 
    {width: "100%" , ease: Elastic.easeInOut}
  );
});