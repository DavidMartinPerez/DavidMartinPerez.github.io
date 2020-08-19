/**
 * uuid unica para el querystring de los ficheros con los problemas de caché
 */
const uuid = () => {
    return '12345678910'; // 
    return 'xxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

module.exports = {
    uuid
}