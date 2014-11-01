var AreaWildLife = function(xmlSource) {
    this.constr = "AreaWildLife";
    this.id = xmlSource.getAttribute("id");
    
    this.unitBaseId = extractFromAttributeWithDefaultObject(xmlSource, "unitBaseId", 0);
    this.regionId = extractFromAttributeWithDefaultObject(xmlSource, "regionId", 0);
    this.ratio = extractFromAttributeWithDefaultObject(xmlSource, "ratio", 0);
}

AreaWildLife.prototype.getId = function() {
  return this.id;
};

AreaWildLife.prototype.getName = function() {
  return "";
};

AreaWildLife.prototype.getValue = function() {
  return "";
};

AreaWildLife.prototype.getRegionId = function() {
  return this.regionId;
};

AreaWildLife.prototype.getRegionName = function() {
  return _RegionData[this.regionId].getName();
};

AreaWildLife.prototype.getUnitBaseId = function() {
  return this.unitBaseId;
};

AreaWildLife.prototype.getUnitBaseName = function() {
  return _UnitBaseData[this.unitBaseId].getName();
};

AreaWildLife.prototype.getUnitBaseIcon = function() {
  return _UnitBaseData[this.unitBaseId].getIcon();
};

AreaWildLife.prototype.getRatio = function() {
  return Math.round(this.ratio * 100) +"%";
};

// Explore Specific
AreaWildLife.prototype.explore = function() {
  var result = [];
  return result.join("");
}

AreaWildLife.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "isIn") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Peut se trouver dans les régions suivantes:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Can be found in the following regions:</h2>';
  }
  if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Humains/Creatures disponible dans la région:</h2>'; }
  return '<h2 class="subTitle exploreSubTitle">Humans/Creatures available in the region:</h2>';
}

AreaWildLife.prototype.exploreTableHeader = function(flavor) {
  if(flavor == "isIn") 
  {
    return '<thead><tr><th>Region Name</th><th>Ratio</th></tr></thead>';
  }
  return '<thead><tr><th></th><th>Human/Creature Name</th><th>Ratio</th></tr></thead>';
}

AreaWildLife.prototype.exploreInformation = function(flavor) {
  if(flavor == "isIn") 
  {
    return '<tr class="exploreItem" onclick="exploreId(\'' + this.getRegionId() + '\')" ><td>' + this.getRegionName() + '</td><td>' + this.getRatio() + '</td></tr>';
  }
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getUnitBaseId() + '\')" ><td><img src="' + this.getUnitBaseIcon() + '" ></td><td>' + this.getUnitBaseName() + '</td><td>' + this.getRatio() + '</td></tr>';
}