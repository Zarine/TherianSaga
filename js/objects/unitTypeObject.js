var UnitType = function(xmlSource) {
    this.constr = "UnitType";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.parentUnitTypeId = extractFromAttributeWithDefaultObject(xmlSource, "parentUnitTypeId", 0);
}

UnitType.prototype.getId = function() {
  return this.id;
};

UnitType.prototype.getName = function() {
  return this.name.getText();
};

UnitType.prototype.getValue = function() {
  return "";
};
