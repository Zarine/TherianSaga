var Territory = function(xmlSource) {
    this.constr = "Territory";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.isProxy = extractFromAttributeWithDefaultObject(xmlSource, "isProxy", 0);
    
    this.regions = extractListObject(xmlSource, "regions");
}

Territory.prototype.getId = function() {
  return this.id;
};

Territory.prototype.getName = function() {
  return this.name.getText();
};

Territory.prototype.getValue = function() {
  return "";
};
