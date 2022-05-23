import ScrollTrigger from "@terwanerik/scrolltrigger";
const trigger = new ScrollTrigger.default();
// trigger.add("[data-scroll]");

trigger.add("[data-scroll]", {
  once: true,
  toggle: {
    class: {
      in: "fromBottomIn",
      out: "fromBottomOut",
    },
  },
});

trigger.add("[data-scroll-vis]", {
  once: true,
  toggle: {
    class: {
      in: "visibilityIn",
      out: "visibilityOut",
    },
  },
});
