function HTML(a,b){return H('html',a,b);};
function HEAD(a,b){return H('head',a,b);};
function BODY(a,b){return H('body',a,b);};
function TITLE(a,b){return H('title',a,b);};
function IFRAME(a,b){return H('iframe',a,b);};
function CANVAS(a,b){return H('canvas',a,b);};
function DIV(a,b){return H('div',a,b);};
function SPAN(a,b){return H('span',a,b);};
function BR(a,b){return H('br',a,b);};
function H1(a,b){return H('h1',a,b);};
function H2(a,b){return H('h2',a,b);};
function H3(a,b){return H('h3',a,b);};
function H4(a,b){return H('h4',a,b);};
function H5(a,b){return H('h5',a,b);};
function H6(a,b){return H('h6',a,b);};
function P(a,b){return H('p',a,b);};
function A(a,b){return H('a',a,b);};
function IMG(a,b){return H('img',a,b);};
function TABLE(a,b){return H('table',a,b);};
function TH(a,b){return H('th',a,b);};
function TR(a,b){return H('tr',a,b);};
function TD(a,b){return H('td',a,b);};
function UL(a,b){return H('ul',a,b);};
function OL(a,b){return H('ol',a,b);};
function DL(a,b){return H('dl',a,b);};
function LI(a,b){return H('li',a,b);};
function FORM(a,b){return H('form',a,b);};
function INPUT(a,b){return H('input',a,b);};
function LABEL(a,b){return H('label',a,b);};
function TEXTAREA(a,b){return H('textarea',a,b);};
function SELECT(a,b){return H('select',a,b);};
function OPTION(a,b){return H('option',a,b);};
function H(elementType, attributesOrBody, maybeBody){
  elementType = elementType ? elementType : 'div';
  var attributesArray = [];
  var selfClosingTag = ['br','hr','input','img','link','meta'].indexOf(elementType) > -1;
  if(selfClosingTag || (typeof attributesOrBody == 'object'))
    maybeBody = '';
  var attributes = (typeof maybeBody == 'undefined') ? {} : (attributesOrBody ? attributesOrBody : {});
  var body = (typeof maybeBody == 'undefined') ? (attributesOrBody ? attributesOrBody : []) : (maybeBody ? maybeBody : []);
  body = (typeof body == 'string') ? [body] : (typeof body != 'object' ? [] : body);
  for(z in attributes)
    attributesArray.push(" " + z + '="' + attributes[z] + '"');
  return '<' + elementType + attributesArray.join('') + (selfClosingTag ? ' />' : '>') + body.join('') + (selfClosingTag ? '' : '</' + elementType + '>');
}