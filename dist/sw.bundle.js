if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let f={};const o=e=>i(e,n),s={module:{uri:n},exports:f,require:o};a[n]=Promise.all(r.map((e=>s[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"afiq.jpeg",revision:"60f93a17a2609dac0420eae8a1d89e89"},{url:"app.bundle.js",revision:"6a4069901add06aed05cbca82a956841"},{url:"app.bundle.js.LICENSE.txt",revision:"577095d37d2ea7898a55327af468a4fa"},{url:"app.webmanifest",revision:"b48b6e451753008713fe8668455588bf"},{url:"company-logo.png",revision:"387bba3bd5bf935cc4455253850772aa"},{url:"company-logo.svg",revision:"f8fde7a0b8444588f0fd6b1a390ca98e"},{url:"danger.png",revision:"28393055fe484f677fc85eaf6c37338b"},{url:"fajar.jpg",revision:"3bc3ff5375e98bab24e4fe8c605a931f"},{url:"favicon.ico",revision:"387bba3bd5bf935cc4455253850772aa"},{url:"icons/icon-128.png",revision:"70aa8d0043ca759583b3b4061cd24964"},{url:"icons/icon-144.png",revision:"aa062538cac85c984a2520e2295400b8"},{url:"icons/icon-152.png",revision:"b1f4a4492fa4776930785ec48e6d18b0"},{url:"icons/icon-192.png",revision:"5dd749eb7cd572c66d1a842caf9f2166"},{url:"icons/icon-384.png",revision:"0687724834b9643aa1d84a2d1ba2d534"},{url:"icons/icon-512.png",revision:"5e59e639159e346518dccbeb0b52c751"},{url:"icons/icon-72.png",revision:"d90ff9785d596fcb65a27c07d342090f"},{url:"icons/icon-96.png",revision:"1a5a8a650b572e8da1686e2a7a237414"},{url:"index.html",revision:"3c6e6d5189304881f23864f4d33ddf29"},{url:"jerry.jpeg",revision:"5ef67763617ee2c365c1dd93bb108ede"},{url:"organic.png",revision:"decf3ffe379a1b75c61658d64fd233f9"},{url:"page1/Vector.svg",revision:"804282be0ec0c1df9371bcb630f7448e"},{url:"page1/Vector1.svg",revision:"fdf25030a58574899087697b0673e74d"},{url:"page1/container1.svg",revision:"905643b183cb747aab5765e348971592"},{url:"page1/container2.svg",revision:"4f98883ba3094e6dfa9898849e200a67"},{url:"page1/container4.svg",revision:"e32d6837212b035818098191305cc34f"},{url:"page1/ekonomi-img.svg",revision:"88a0e01cf8bbad88cdd935ef3e6124f0"},{url:"page1/kesehatan-img.svg",revision:"c9bf0e8021540e1ff424f5abe0ce4fb0"},{url:"page1/lingkungan-img.svg",revision:"0b15bc9a6ad7f283cd0b9de4169d1e42"},{url:"page1/logo.svg",revision:"32a1b90866b803320a7a885f6e168bae"},{url:"page1/sosial-img.svg",revision:"be9731091751d193b340f518b9b9b208"},{url:"page1/wave.svg",revision:"6d41364ec2e5db69aa71cd8854a4eea6"},{url:"page2/container1.svg",revision:"f201e3cdff4f0a39c5926ef7671c4c47"},{url:"page2/container2.svg",revision:"b601fb0dd60c0325c643da770a761c2c"},{url:"page2/danger.png",revision:"28393055fe484f677fc85eaf6c37338b"},{url:"page2/organic.png",revision:"decf3ffe379a1b75c61658d64fd233f9"},{url:"page2/plastik.png",revision:"f53b3a39cf8f45b571f4d63d2a59a0fd"},{url:"page3/afiq.svg",revision:"b5e5d9c1a153ca80bc167844595cb02a"},{url:"page3/container1.svg",revision:"d30d6a6e41714437ca5aff31e88d33d7"},{url:"page3/fajar.svg",revision:"254535258f4db1759f075d7649c82475"},{url:"page3/fariz.svg",revision:"65ae5c60a8855ef32db62a3af443b732"},{url:"page3/jery.svg",revision:"34aa0d7af09ea8110abc053aed5e14b4"},{url:"picture-1.jpg",revision:"bcc225a7d635684249c38877d14914b0"},{url:"picture-2.png",revision:"969ad8fa16d36f871dec559c7a7c99dd"},{url:"picture-3.jpg",revision:"b30e2561c32549c25bb6c5319a7ec353"},{url:"picture-tong-sampah.jpg",revision:"b1310fcece27d61f0217345a5ea86e58"},{url:"plastik.png",revision:"f53b3a39cf8f45b571f4d63d2a59a0fd"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
