var Store = function(xmlSource) {
    this.constr = "Store";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");

    this.siteId = extractFromAttributeWithDefaultObject(xmlSource, "siteId", 0);
    this.residentId = extractFromAttributeWithDefaultObject(xmlSource, "residentId", 0);
    
    this.sellItemBases = extractListObject(xmlSource, "sellItemBases");
}

Store.prototype.getId = function() {
  return this.id;
};

Store.prototype.getName = function() {
  return this.name.getText();
};

Store.prototype.getValue = function() {
  return "";
};

