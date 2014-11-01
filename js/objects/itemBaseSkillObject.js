var ItemBaseSkill = function(xmlSource) {
    this.constr = "ItemBaseSkill";

    this.id = xmlSource.getAttribute("id");

    this.value = extractFromAttributeWithDefaultObject(xmlSource, "value", 0);
    this.isProxy = extractFromAttributeWithDefaultObject(xmlSource, "isProxy", 0);

    this.skillId = xmlSource.getAttribute("skillId");
    this.itemBaseId = xmlSource.getAttribute("itemBaseId");
}

ItemBaseSkill.prototype.getId = function() {
  return this.id;
};

ItemBaseSkill.prototype.getName = function() {
  return "";
};

ItemBaseSkill.prototype.getValue = function() {
  return this.value;
};

ItemBaseSkill.prototype.getSkillName = function() {
  return _SkillData[this.skillId].getName();
};

ItemBaseSkill.prototype.getItemBaseName = function() {
  return _ItemBaseData[this.itemBaseId].getName();
};
