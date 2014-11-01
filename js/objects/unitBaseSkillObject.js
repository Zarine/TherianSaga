var UnitBaseSkill = function(xmlSource) {
    this.constr = "UnitBaseSkill";
    this.id = xmlSource.getAttribute("id");
    
    this.value = extractFromAttributeWithDefaultObject(xmlSource, "value", 0);
    this.skillId = extractFromAttributeWithDefaultObject(xmlSource, "skillId", 0);
    this.unitBaseId = extractFromAttributeWithDefaultObject(xmlSource, "unitBaseId", 0);
    this.isProxy = extractFromAttributeWithDefaultObject(xmlSource, "isProxy", 0);
}

UnitBaseSkill.prototype.getId = function() {
  return this.id;
};

UnitBaseSkill.prototype.getName = function() {
  return "";
};

UnitBaseSkill.prototype.getValue = function() {
  return this.value;
};
