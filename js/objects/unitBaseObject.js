var UnitBase = function(xmlSource) {
    this.constr = "UnitBase";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.unitType = extractFromAttributeWithDefaultObject(xmlSource, "unitType", 0);
    this.largeImageId = extractFromAttributeWithDefaultObject(xmlSource, "largeImageId", 0);
    this.portraitId = extractFromAttributeWithDefaultObject(xmlSource, "portraitId", 0);
    this.smallImageId = extractFromAttributeWithDefaultObject(xmlSource, "smallImageId", 0);
    this.iconId = extractFromAttributeWithDefaultObject(xmlSource, "iconId", 0);
    this.interestSkillId = extractFromAttributeWithDefaultObject(xmlSource, "interestSkillId", 0);
    this.interestSkillValue = extractFromAttributeWithDefaultObject(xmlSource, "interestSkillValue", 0);
    this.aggressiveness = extractFromAttributeWithDefaultObject(xmlSource, "aggressiveness", 0);
    this.tamingTaskId = extractFromAttributeWithDefaultObject(xmlSource, "tamingTaskId", 0);
    this.huntingTaskId = extractFromAttributeWithDefaultObject(xmlSource, "huntingTaskId", 0);
    
    this.regions = extractListObject(xmlSource, "regions");
    this.skills = extractListObject(xmlSource, "skills");
}

UnitBase.prototype.getId = function() {
  return this.id;
};

UnitBase.prototype.getName = function() {
  return this.name.getText();
};

UnitBase.prototype.getValue = function() {
  return "";
};

UnitBase.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};
