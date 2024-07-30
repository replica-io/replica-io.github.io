import { unscramble } from "botex";

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches('a[href="/#contact-email"]')) {
      event.preventDefault();
      const contactEmailKey = "CHKXRg4cdMZ0XADF";
      const obfuscatedContactEmail =
        "BwC1311181fB4C1sBzmC14162k1dByC112z16132t1o1jBh";
      window.location.href = `mailto:${unscramble(
        obfuscatedContactEmail,
        contactEmailKey
      )}`;
    }
  });
});
