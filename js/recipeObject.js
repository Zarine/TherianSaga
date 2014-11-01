var Recipe = function(xmlSource) {
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.representedByItemBaseId = extractFromAttributeWithDefaultObject(xmlSource, "representedByItemBaseId", 0);
	this.producedItemBaseId = extractFromAttributeWithDefaultObject(xmlSource, "producedItemBaseId", 0);
	this.isDiscoverable = extractFromAttributeWithDefaultObject(xmlSource, "isDiscoverable", 0);
    
    this.useInTasks = extractListObject(xmlSource, "useInTasks");
	this.ingredients = extractListObject(xmlSource, "ingredients");
}

Recipe.prototype.getId = function() {
  return this.id;
};

Recipe.prototype.getName = function() {
  return this.name.getText();
};

Recipe.prototype.getValue = function() {
  return "";
};

Recipe.prototype.getProducedItemName = function() {
  return _ItemBaseData[this.producedItemBaseId].getName();
}

Recipe.prototype.getRepresentedByItemName = function() {
  return _ItemBaseData[this.representedByItemBaseId].getName();
}

Recipe.prototype.getTaskName = function(i) {
  return _TaskData[this.useInTasks[i]].getName();
}
