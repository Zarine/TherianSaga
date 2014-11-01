var LandForm = function(xmlSource) {
    this.constr = "LandForm";
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

LandForm.prototype.getSkillId = function() {
  return this.skillId;
};

LandForm.prototype.getSkillName = function() {
  return _SkillData[this.skillId].getName();
};

LandForm.prototype.getSkillIcon = function() {
  return _SkillData[this.skillId].getIcon();
};

LandForm.prototype.getRegions = function() {
  return this.regions;
};