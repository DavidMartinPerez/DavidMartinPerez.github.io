/**
* Obtenemos la url completa de los archivos
*/
const GET_URL_FILES = ( arrayUrls, urlBase  ) => {

   arrayUrls.forEach( (url,index) => arrayUrls[index] = `${urlBase}${url}` );

   return arrayUrls;
}

/**
 * uuid unica para el querystring de los ficheros con los problemas de caché
 */
const uuid = () => {
    return 'xxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

module.exports = {
    GET_URL_FILES,
    uuid
}