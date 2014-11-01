var Skill = function(xmlSource) {
    this.constr = "Skill";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
	
    this.iconId = extractFromAttributeWithDefaultObject(xmlSource, "iconId", 0);
    this.sequenceOrder = extractFromAttributeWithDefaultObject(xmlSource, "sequenceOrder", 0);
   
    
    this.usedByItemTypes = extractListObject(xmlSource, "usedByItemTypes");
    this.usedByUnitBaseSkills = extractListObject(xmlSource, "usedByUnitBaseSkills");
    this.usedByItemBaseSkills = extractListObject(xmlSource, "usedByItemBaseSkills");
    this.taskGroups = extractListObject(xmlSource, "taskGroups");
    this.subSkills = extractListObject(xmlSource, "subSkills");
}

Skill.prototype.getId = function() {
  return this.id;
};

Skill.prototype.getName = function() {
  return this.name.getText();
};

Skill.prototype.getValue = function() {
  return "";
};

Skill.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};
