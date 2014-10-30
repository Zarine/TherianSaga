var LocalizedText = function(xmlSource, tagname) {
  var element = xmlSource.getElementsByTagName(tagname)[0];

  if (element == null) {
    this.fr = "Pas de " + tagname;
    this.en = "No " + tagname;
    console.log("No name at all for " + xmlSource.getAttribute("id"));
  }
  
  this.fr = element.getElementsByTagName("text")[0].childNodes[0].nodeValue;
  if (element.getElementsByTagName("text").length == 1) {
    this.en = this.fr;
    console.log("Missing English " + tagname + " for: " + this.fr);
  } else {
    this.en = element.getElementsByTagName("text")[1].childNodes[0].nodeValue;
  }
}

LocalizedText.prototype.getText = function() {
  if (_Language == 'FR') {
    return this.fr;
  } else {
    return this.en;
  }
}

