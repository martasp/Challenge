translate = require('./moji-translate');
console.log(translate.getAllEmojiForWord('👀'));
console.log(translate.translate("the house is on fire and the cat is eating the cake"));

window.translateEmojiGlobal = function (text) {
    console.log(translate.getAllEmojiForWord('👀'));
    console.log(translate.translate("the house is on fire and the cat is eating the cake"));
    return translate.translate(text);
}