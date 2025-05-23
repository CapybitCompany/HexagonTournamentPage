import { e as createComponent, m as maybeRenderHead, k as renderSlot, r as renderTemplate, f as createAstro, h as addAttribute, j as renderScript } from './astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */

const $$CarouselElement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="carouselElement"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/Carousel/CarouselElement.astro", void 0);

const $$Astro$1 = createAstro();
const $$CarouselElementLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CarouselElementLayout;
  const { imgSrc, styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carouselElementContainer"${addAttribute(`${styles}`, "style")} data-astro-cid-273u7ja3> <div class="carouselImageWrapper" data-astro-cid-273u7ja3> <img class="carouselImage"${addAttribute(`${imgSrc}`, "src")} data-astro-cid-273u7ja3> </div> <div class="carouselContentWrapper" data-astro-cid-273u7ja3> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/Carousel/CarouselElementLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { carouselId, startIndex } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="carousel-outer-wrapper"', "", ' data-astro-cid-beja5f4g> <button class="nav left" aria-label="Prev" data-astro-cid-beja5f4g>&#9664;</button> <button class="nav right" aria-label="Next" data-astro-cid-beja5f4g>&#9654;</button> <div class="gradient left-gradient" data-astro-cid-beja5f4g></div> <div class="gradient right-gradient" data-astro-cid-beja5f4g></div> <div class="carousel-wrapper" data-astro-cid-beja5f4g> <div class="carousel" id="carousel" data-astro-cid-beja5f4g> ', ' </div> </div> <div class="carouselIndicatorsWrapper" data-astro-cid-beja5f4g> <div class="carousel-indicators" data-astro-cid-beja5f4g></div> </div> </div>  ', ` <script type="module">
    function reportSize() {
        const carouselWrapper = document.querySelector(\`.carousel-outer-wrapper[data-carousel-id="\${id}"]\`);
        const carousel = carouselWrapper?.getElementsByClassName('carousel')[0];
        const indicatorsContainer = carouselWrapper?.getElementsByClassName('carousel-indicators')[0];
        const children = Array.from(indicatorsContainer.children); 

        const activeIndex = children.findIndex(child => child.classList.contains('active'));

        if(carousel && activeIndex != -1){
            var slides = Array.from(carousel.children);
            const slideWidth = slides[1].offsetWidth;
            carousel.scrollTo({ left: slideWidth * (activeIndex + 1) , behavior: 'smooth' });
            console.log("TEST", slideWidth, activeIndex)
        }
    }
  
    window.addEventListener('resize', reportSize);
<\/script>`], ["", '<div class="carousel-outer-wrapper"', "", ' data-astro-cid-beja5f4g> <button class="nav left" aria-label="Prev" data-astro-cid-beja5f4g>&#9664;</button> <button class="nav right" aria-label="Next" data-astro-cid-beja5f4g>&#9654;</button> <div class="gradient left-gradient" data-astro-cid-beja5f4g></div> <div class="gradient right-gradient" data-astro-cid-beja5f4g></div> <div class="carousel-wrapper" data-astro-cid-beja5f4g> <div class="carousel" id="carousel" data-astro-cid-beja5f4g> ', ' </div> </div> <div class="carouselIndicatorsWrapper" data-astro-cid-beja5f4g> <div class="carousel-indicators" data-astro-cid-beja5f4g></div> </div> </div>  ', ` <script type="module">
    function reportSize() {
        const carouselWrapper = document.querySelector(\\\`.carousel-outer-wrapper[data-carousel-id="\\\${id}"]\\\`);
        const carousel = carouselWrapper?.getElementsByClassName('carousel')[0];
        const indicatorsContainer = carouselWrapper?.getElementsByClassName('carousel-indicators')[0];
        const children = Array.from(indicatorsContainer.children); 

        const activeIndex = children.findIndex(child => child.classList.contains('active'));

        if(carousel && activeIndex != -1){
            var slides = Array.from(carousel.children);
            const slideWidth = slides[1].offsetWidth;
            carousel.scrollTo({ left: slideWidth * (activeIndex + 1) , behavior: 'smooth' });
            console.log("TEST", slideWidth, activeIndex)
        }
    }
  
    window.addEventListener('resize', reportSize);
<\/script>`])), maybeRenderHead(), addAttribute(`${carouselId}`, "data-carousel-id"), addAttribute(`${startIndex}`, "data-start-index"), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/workspace/TutorialsPage/extinct-equator/src/components/Carousel/Carousel.astro?astro&type=script&index=0&lang.ts"));
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/Carousel/Carousel.astro", void 0);

export { $$Carousel as $, $$CarouselElement as a, $$CarouselElementLayout as b };
