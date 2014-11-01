var TaskGroup = function(xmlSource) {
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.iconId = xmlSource.getAttribute("iconId");
    this.sequenceOrder = extractFromAttributeWithDefaultObject(xmlSource, "sequenceOrder", 0);
    
    this.tasks = extractListObject(xmlSource, "tasks");
}

TaskGroup.prototype.getId = function() {
  return this.id;
};

TaskGroup.prototype.getName = function() {
  return this.name.getText();
};

TaskGroup.prototype.getValue = function() {
  return "";
};

TaskGroup.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};
