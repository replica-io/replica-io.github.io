import ExecutionEnvironment from"@docusaurus/ExecutionEnvironment";import{unscramble}from"botex";const botexKey="CHKXRg4cdMZ0XADF",obfuscatedEmail="BwC1311181fB4C1sBzmC14162k1dByC112z16132t1o1jBh";export function onRouteUpdate({location:o,previousLocation:t}){if(ExecutionEnvironment.canUseDOM&&"/"===o.pathname&&"#contact-email"===o.hash){const o=unscramble(obfuscatedEmail,botexKey);window.location.href=`mailto:${o}`}}