var LandForm = function(xmlSource) {
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.skillId = extractFromAttributeWithDefaultObject(xmlSource, "skillId", 0);
    
    this.regions = extractListObject(xmlSource, "regions");
}

LandForm.prototype.getId = function() {
  return this.id;
};

LandForm.prototype.getName = function() {
  return this.name.getText();
};

LandForm.prototype.getValue = function() {
  return "";
};
