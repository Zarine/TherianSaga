var Zone = function(xmlSource) {
    this.constr = "Zone";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.siteId = extractFromAttributeWithDefaultObject(xmlSource, "siteId", 0);
    this.parentZoneId = extractFromAttributeWithDefaultObject(xmlSource, "parentZoneId", 0);
    
    this.zones = extractListObject(xmlSource, "zones");
    this.residents = extractListObject(xmlSource, "residents");
}

Zone.prototype.getId = function() {
  return this.id;
};

Zone.prototype.getName = function() {
  return this.name.getText();
};

Zone.prototype.getValue = function() {
  return "";
};
