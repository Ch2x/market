const loaderUtils = require('loader-utils');

const style = /<style lang="scss" scoped>([\s\S]+)<\/style>/gi

module.exports = function (content) {
    let _source = ''

    if(style.test(content)) {
        _source = content.match(style)[0]
    }

    let regExp = /(d+)rem/gi;

    if(regExp.test(_source)) {
        let res = _source.replace(regExp, function(value1, value2) {
            return
        })
    } else {
        return content
    }
}