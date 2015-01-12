var clickTag = document.scripts[document.scripts.length - 1].replace(/^.*clickTAG=(.*)$/, '$1');
console.log('clickTag', clickTag);

function createLink(text, url) {
	var linkNode = document.createElement('a');
	linkNode.setAttribute('href', clickTag + url);
	var textNode = document.createTextNode(text + ' ');
	linkNode.appendChild(textNode)
	return linkNode;
}


document.body.appendChild(createLink('guloggratis', 'http://guloggratis.dk'))
document.body.appendChild(createLink('fmAdserving', 'http://fmadserving.dk'))