import { e as createComponent, m as maybeRenderHead, k as renderSlot, r as renderTemplate, f as createAstro, h as addAttribute } from './astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="faqContainer" data-astro-cid-u6zmyoqc> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/FAQ/FAQ.astro", void 0);

const $$FAQLine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="faqLine" data-astro-cid-ejz7szmn> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/FAQ/FAQLine.astro", void 0);

const $$FAQAnswer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="faqAnswer" data-astro-cid-ckosbtbk> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/FAQ/FAQAnswer.astro", void 0);

const $$FAQQuestion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="faqQuestion" data-astro-cid-bwpgvscz> <b data-astro-cid-bwpgvscz>${renderSlot($$result, $$slots["default"])}</b> </div> `;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/FAQ/FAQQuestion.astro", void 0);

const $$Astro = createAstro();
const $$SimpleTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimpleTable;
  const { headers, rows } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table" data-astro-cid-tiiehpnr> <thead data-astro-cid-tiiehpnr> <tr data-astro-cid-tiiehpnr> ${headers.map((header) => renderTemplate`<th data-astro-cid-tiiehpnr><div class="tableHeader" data-astro-cid-tiiehpnr>${header}</div></th>`)} </tr> </thead> <tbody data-astro-cid-tiiehpnr> ${rows.map((row) => renderTemplate`<tr data-astro-cid-tiiehpnr> ${row.map((cell) => renderTemplate`<td data-astro-cid-tiiehpnr> <div class="tableCell" data-astro-cid-tiiehpnr> ${cell.icon && renderTemplate`<img${addAttribute(cell.icon, "src")} alt="" class="cellIcon" data-astro-cid-tiiehpnr>`} <div class="cellText" data-astro-cid-tiiehpnr>${cell.text}</div> </div> </td>`)} </tr>`)} </tbody> </table> `;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/SimpleTable/SimpleTable.astro", void 0);

export { $$SimpleTable as $, $$FAQ as a, $$FAQLine as b, $$FAQQuestion as c, $$FAQAnswer as d };
