var Task = function(xmlSource) {
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.duration = extractFromAttributeWithDefaultObject(xmlSource, "duration", 0);
	this.skillId = extractFromAttributeWithDefaultObject(xmlSource, "skillId", 0);
	this.recipeId = extractFromAttributeWithDefaultObject(xmlSource, "recipeId", 0);
	this.producedItemBase = extractFromAttributeWithDefaultObject(xmlSource, "producedItemBase", 0);
	this.difficulty = extractFromAttributeWithDefaultObject(xmlSource, "difficulty", 0);
	this.effort = extractFromAttributeWithDefaultObject(xmlSource, "effort", 0);
	this.cooldown = extractFromAttributeWithDefaultObject(xmlSource, "cooldown", 0);
}

Task.prototype.getId = function() {
  return this.id;
};

Task.prototype.getName = function() {
  return this.name.getText();
};

Task.prototype.getValue = function() {
  return "";
};

Task.prototype.getSkillName = function() {
  return _SkillData[this.skillId].getName();
}

