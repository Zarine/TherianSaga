var Image = function(xmlSource) {
    this.id = xmlSource.getAttribute("id");
    this.path = xmlSource.getAttribute("path");
}

Image.prototype.getId = function() {
  return this.id;
};

Image.prototype.getName = function() {
  return "";
};

Image.prototype.getValue = function() {
  return "";
};