var Resident = function(xmlSource) {
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.siteId = extractFromAttributeWithDefaultObject(xmlSource, "siteId", 0);
    this.iconId = extractFromAttributeWithDefaultObject(xmlSource, "iconId", 0);
    this.imageId = extractFromAttributeWithDefaultObject(xmlSource, "imageId", 0);
    
    this.stores = extractListObject(xmlSource, "stores");
}

Resident.prototype.getId = function() {
  return this.id;
};

Resident.prototype.getName = function() {
  return this.name.getText();
};

Resident.prototype.getValue = function() {
  return "";
};

TaskGroup.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};
