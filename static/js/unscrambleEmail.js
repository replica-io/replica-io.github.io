import { unscramble } from "botex";

export function onRouteDidUpdate({ location, previousLocation }) {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      document.body.addEventListener("click", function (event) {
        if (event.target.matches('a[href="/#contact-email"]')) {
          event.preventDefault();
          const contactEmailKey = "CHKXRg4cdMZ0XADF";
          const obfuscatedContactEmail =
            "BwC1311181fB4C1sBzmC14162k1dByC112z16132t1o1jBh";
          const unscrambledEmail = unscramble(
            obfuscatedContactEmail,
            contactEmailKey
          );
          window.location.href = `mailto:${unscrambledEmail}`;
        }
      });
    }, 1000); // Delay to ensure the DOM is fully updated
  }
}
