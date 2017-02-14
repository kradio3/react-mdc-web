 function isSupportCssCustomProperties(globalObj = window) {
   if ('CSS' in globalObj) {
     return globalObj.CSS.supports('(--color: red)');
   }
   return false;
 }
 export default isSupportCssCustomProperties;
