// The loader plays once per full page load. Hero reads this to skip its entrance delay
// when you come back to the home page from a case study.
let played = false;

export const introPlayed = () => played;
export const markIntroPlayed = () => {
  played = true;
};

export const INTRO_DELAY = 2.8;
