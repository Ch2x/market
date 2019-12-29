const style = /<style lang="scss" scoped>([\s\S]+)<\/style>/gi

module.exports = function (content) {
  let _source = ''
  
  if (style.test(content)) {
    _source = content.match(style)[0]
  }
  let regExp = /(\d*(\.\d+)?)rem/gi;
  if (regExp.test(_source)) {
    let res = _source.replace(regExp, function (value1, value2) {
      console.log(value2)
      return (Number(value2) * 20).toFixed() + 'px';
    })
    return content.replace(_source, res)
  } else {
    return content
  }
}
