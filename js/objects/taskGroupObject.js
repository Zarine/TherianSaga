var TaskGroup = function(xmlSource) {
    this.constr = "TaskGroup";
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

// Explore Specific
TaskGroup.prototype.explore = function() {
  var result = [];
  return result.join("");
}

TaskGroup.prototype.exploreCategoryTitle = function(flavor) {
  if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Est utile pour les tâches des types suivants:</h2>'; }
  return '<h2 class="subTitle exploreSubTitle">Is useful for following tasks:</h2>';
}

TaskGroup.prototype.exploreTableHeader = function() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th></tr></thead>';
}

TaskGroup.prototype.exploreInformation = function() {
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td class="exploreItemIcon"><img src="' + this.getIcon() + '" ></td><td class="exploreItemName">' + this.getName() + '</td></tr>';
}