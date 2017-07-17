var tags = [
  'html','head','body','title','iframe','canvas','div','span','br','h1','h2',
  'h3','h4','h5','h6','p','a','img','table','th','tr','td','ul','ol','dl','li',
  'form','input','label','textarea','select','option'
];
tags.forEach(function(tag) {
  window[tag.toUpperCase()] = H.bind(null, tag);
});
function H(){
  var tag = arguments[0] || 'div';
  var attributes = {};
  var contents = [];
  for(var i = 1; i < arguments.length; i++) {
    var argument = arguments[i];
    if(argument.constructor === Object) {
      Object.keys(argument).forEach(function(attributeName) {
        attributes[attributeName] = argument[attributeName];
      });
    } else if(argument.constructor === Array) {
      Array.prototype.push.apply(contents, argument);
    } else {
      contents.push(argument)
    }
  }
  var parts = Object.keys(attributes).map(function(attribute) {
    return attribute + '="' + attributes[attribute] + '"';
  });
  parts.unshift(tag);
  if(['br','hr','input','img','link','meta'].indexOf(tag) < 0) {
    return '<' + parts.join(' ') + '>' + contents.join('') + '</' + tag + '>';
  } else {
    return '<' + parts.join(' ') + ' />';
  }
}