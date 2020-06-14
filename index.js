/*! LazyMasonry | (c) Rafael Muradyan | github.com/rafaelmrdyn */
var defaultConfig={images:5,width:window.innerWidth,animateable:!0,animationType:"from-top",animationDuration:"0.5s"};export default function LazyMasonry(t,e=defaultConfig){var n,i=this,a={array:[]};function r(t,n,a,r){var o=document.createElement("DIV");o.classList.add("lazy-masonry");var s=document.createElement("IMG");s.style.width="calc(100% - 10px)",s.style.borderRadius="20px",o.style.position="absolute",e.animationType&&("from-top-left"===e.animationType?o.style.transform=`translate(-1000px, -${window.innerHeight}px)`:"from-top"===e.animationType?o.style.transform=`translateY(-${window.innerWidth}px)`:"from-top-right"===e.animationType?o.style.transform=`translate(${window.innerWidth}px, -${window.innerHeight}px)`:"from-right"===e.animationType?o.style.transform=`translateX(${window.innerWidth}px)`:"from-left"===e.animationType?o.style.transform=`translateX(-${window.innerWidth}px)`:"from-bottom"===e.animationType&&(o.style.transform=`translateY(${window.innerWidth}px)`),o.style.transition=e.animationDuration||"0.5s",setTimeout(()=>{o.style.transform="translate(0, 0)"},50)),o.appendChild(s),o.addEventListener("click",()=>{"function"==typeof r.click&&r.click(t)}),s.onload=(()=>{var e=function(t,e){var n,a,r,o=i.config.images,s=[];r=i.element.offsetWidth/o;for(var l=0;l<o;l++){if(null===e.imagesMatrix[l])return n=0,a=l?i.element.offsetWidth/o*l:0,e.imagesMatrix[l]=t,{top:n,left:a,width:r};var f=e.imagesMatrix[l];s.push(f.offsetTop+f.offsetHeight)}var m=Math.min(...s),d=s.findIndex(t=>t===m);return n=m,a=d?i.element.offsetWidth/o*d:0,e.imagesMatrix[d]=t,{top:n,left:a,width:r}}(o,r);o.style.width=e.width+"px",o.style.top=e.top+"px",o.style.left=e.left+"px",i.element.appendChild(o),o.style.height=s.offsetHeight+"px",s.style.height="calc(100% - 10px)","function"==typeof n&&n(t),r.array||(r.array=[]),r.array.push(t)}),s.onerror=(()=>{"function"==typeof a&&a({success:!1,message:"Image not loaded",data:t})}),s.src=t.uri}this.element=document.getElementById(t),this.element.style.position="relative",this.config=e,a.imagesMatrix=function(t){var t=i.config.images,e={};for(let n=0;n<t;n++)e[n]=null;return e}(e.images),window.onresize=(()=>{clearTimeout(n),n=setTimeout(()=>{this.element.innerHTML="",this.runWithArray([...a.array]),a.array=[]},100)}),this.add=((t,e,n)=>{!function(t,e,n){r(t,e,n,a)}(t,e,n)}),this.runWithArray=(t=>{!function(t){for(var e=0;e<t.length;e++)r(t[e],null,null,a)}(t)}),this.onclick=(t=>{!function(t){a.click=t}(t)})}