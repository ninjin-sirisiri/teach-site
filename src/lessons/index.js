import { webIntro } from "./web-intro.js";
import { modernWeb } from "./modern-web.js";
import { htmlIntro } from "./html-intro.js";
import { htmlBasics } from "./html-basics.js";
import { cssIntro } from "./css-intro.js";
import { cssBasics } from "./css-basics.js";
import { jsIntro } from "./js-intro.js";
import { jsBasics } from "./js-basics.js";
import { jsAdvanced } from "./js-advanced.js";
import { tsIntro } from "./ts-intro.js";
import { tsBasics } from "./ts-basics.js";
import { gitIntro } from "./git-intro.js";
import { githubBasics } from "./github-basics.js";
import { deployGuide } from "./deploy-guide.js";
import { reactBasics } from "./react-basics.js";
import { tailwindBasics } from "./tailwind-basics.js";

export const lessons = [
  webIntro,
  modernWeb,
  htmlIntro,
  htmlBasics,
  cssIntro,
  cssBasics,
  jsIntro,
  jsBasics,
  jsAdvanced,
  tsIntro,
  tsBasics,
  gitIntro,
  githubBasics,
  deployGuide,
  reactBasics,
  tailwindBasics,
];

export const getLessonById = (id) => lessons.find((l) => l.id === id);
