var Task = function(xmlSource) {
  this.constr = "Task";
  this.id = xmlSource.getAttribute("id");
  this.name = new LocalizedText(xmlSource, "name");
    
  this.duration = extractFromAttributeWithDefaultObject(xmlSource, "duration", "0");
	this.skillId = extractFromAttributeWithDefaultObject(xmlSource, "skillId", 0);
	this.recipeId = extractFromAttributeWithDefaultObject(xmlSource, "recipeId", 0);
	this.producedItemBase = extractFromAttributeWithDefaultObject(xmlSource, "producedItemBase", 0);
	this.difficulty = extractFromAttributeWithDefaultObject(xmlSource, "difficulty", "");
	this.effort = extractFromAttributeWithDefaultObject(xmlSource, "effort", 0);
	this.cooldown = extractFromAttributeWithDefaultObject(xmlSource, "cooldown", "0");
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

Task.prototype.getDifficulty = function() {
  return this.difficulty;
};

Task.prototype.getDuration = function() {
  return this.duration.toHHMMSS();
};

Task.prototype.getEffort = function() {
  return this.effort;
};

Task.prototype.getCooldown = function() {
  return this.cooldown.toHHMMSS();
};

Task.prototype.getRecipeId = function() {
  return this.recipeId;
}

Task.prototype.getIngredients = function(i) {
  return _RecipeData[this.recipeId].getIngredients();
}

Task.prototype.getSkillId = function() {
  return this.skillId;
}

Task.prototype.getSkillName = function() {
  return _SkillData[this.skillId].getName();
}

Task.prototype.getSkillIcon = function() {
  return _SkillData[this.skillId].getIcon();
}

Task.prototype.getProducedItemId = function() {
  return this.producedItemBase;
}

Task.prototype.getProducedItemName = function() {
  return _ItemBaseData[this.producedItemBase].getName();
}

Task.prototype.getProducedItemIcon = function() {
  return _ItemBaseData[this.producedItemBase].getIcon();
}

Task.prototype.getTaskGroupId = function() {
  for( var id in _TaskGroupData)
  {
    var taskList = _TaskGroupData[id].tasks;
    for(var i = 0; i < taskList.length; ++i)
    {
      if(this.id == taskList[i]) { return id; }
    }
  }
  return 0;
}

Task.prototype.getTaskGroupName = function() {
  return _TaskGroupData[this.getTaskGroupId()].getName();
}

Task.prototype.getTaskGroupIcon = function() {
  return _TaskGroupData[this.getTaskGroupId()].getIcon();
}

// Explore Specific
Task.prototype.explore = function() {
  var result = [];
  
  // First set a Title
  result.push('<img src="' + this.getSkillIcon() + '" ><h1 class="exploreTitle title" id="' + this.getId() + '">' + this.getName());
  if(this.getProducedItemId() != 0) { result.push(' / <img src="' + this.getProducedItemIcon() + '" ><span class="exploreItem" onclick="exploreId(\'' + this.getProducedItemId() + '\')" >' + this.getProducedItemName() + '</span></h1>'); }
  
  result.push( exploreList([this.getId()], "self"));

  result.push( exploreList(this.getIngredients()) );

  return result.join("");
}

Task.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "self") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Information:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Information:</h2>';
  }
  if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Tâches:</h2>'; }
  return '<h2 class="subTitle exploreSubTitle">Tasks:</h2>';
}

Task.prototype.exploreTableHeader = function() {
  return '<thead><tr><th></th><th>Name</th><th>Produced item type name</th><th>Skill</th><th>Difficulty</th><th>Duration</th><th>Effort</th><th>Cooldown</th></tr></thead>';
}

Task.prototype.exploreInformation = function(flavor) {
  if(flavor == "taskGroup")
  {
    return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td><img src="' + this.getProducedItemIcon() + '" ></td><td>' + this.getName() + '</td><td>' + this.getProducedItemName() + '</td><td>' + this.getSkillName() + '</td><td>' + this.getDifficulty() + '</td><td>' + this.getDuration() + '</td><td>' + this.getEffort() + '</td><td>' + this.getCooldown() + '</td>';
  }
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getTaskGroupId() + '\')" ><td><img src="' + this.getTaskGroupIcon() + '" ></td><td>' + this.getName() + '</td><td>' + this.getProducedItemName() + '</td><td>' + this.getSkillName() + '</td><td>' + this.getDifficulty() + '</td><td>' + this.getDuration() + '</td><td>' + this.getEffort() + '</td><td>' + this.getCooldown() + '</td>';
}