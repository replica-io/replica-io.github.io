import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { unscramble } from "botex";

const botexKey = "CHKXRg4cdMZ0XADF";
const obfuscatedEmail = "BwC1311181fB4C1sBzmC14162k1dByC112z16132t1o1jBh";

export function onRouteUpdate({ location, previousLocation }) {
  if (ExecutionEnvironment.canUseDOM) {
    if (location.pathname === '/' && location.hash === '#contact-email') {
      const email = unscramble(obfuscatedEmail, botexKey);
      window.location.href = `mailto:${email}`;
    }
  }
}