import { animationSettings, sortedslide, shuffleArray } from "../../../utils";

export const horizontalSlide = (currentSlide: any, tl: any, dir: string) => {
  const currentSlideFigures = sortedslide(currentSlide.figures, dir, "right");
  currentSlideFigures.forEach((figure: any, pos: any) => {
    tl.to(
      figure.parentElement,
      {
        duration: 0.8,
        ease: "easeOut",
        x: dir === "right" ? "-101%" : "101%",
      },
      "begin+=" + pos * 0.13
    ).to(
      figure.slideElement,
      {
        duration: 0.8,
        ease: "easeOut",
        startAt: { transformOrigin: "0% 50% 0px" },
        x: dir === "right" ? "101%" : "-101%",
      },
      "begin+=" + pos * 0.13
    );
  });

  tl.to(
    currentSlide.DOM.text,
    {
      duration: 0.8,
      ease: "easeOut",
      opacity: 0,
    },
    "begin+=" + animationSettings.duration * animationSettings.staggerFactor
  );
  tl.staggerTo(
    shuffleArray(currentSlide.innerTitleMainLetters),
    0.05,
    {
      ease: "easeOut",
      opacity: 0,
    },
    0.04,
    "begin+=" + animationSettings.duration * animationSettings.staggerFactor
  );

  [...currentSlide.DOM.innerTitle]
    .filter((_: any, pos: any) => pos < currentSlide.innerTitleTotal - 1)
    .forEach((inner: any) => {
      tl.to(
        inner,
        0.1,
        {
          ease: "easeOut",
          opacity: 0,
        },
        "begin+=" + animationSettings.duration * animationSettings.staggerFactor
      );
    });
};
