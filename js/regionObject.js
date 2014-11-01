var Region = function(xmlSource) {
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.territoryId = extractFromAttributeWithDefaultObject(xmlSource, "territoryId", 0);
    this.landformId = extractFromAttributeWithDefaultObject(xmlSource, "landformId", 0);
    this.difficulty = extractFromAttributeWithDefaultObject(xmlSource, "difficulty", 0);
    
    this.wildlifes = extractListObject(xmlSource, "wildlifes");
    this.resources = extractListObject(xmlSource, "resources");
}

Region.prototype.getId = function() {
  return this.id;
};

Region.prototype.getName = function() {
  return this.name.getText();
};

Region.prototype.getValue = function() {
  return "";
};

