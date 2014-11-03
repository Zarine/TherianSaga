var AreaResource = function(xmlSource) {
    this.constr = "AreaResource";
    this.id = xmlSource.getAttribute("id");

    this.itemBaseId = extractFromAttributeWithDefaultObject(xmlSource, "itemBaseId", 0);
    this.regionId = extractFromAttributeWithDefaultObject(xmlSource, "regionId", 0);
    this.minimumQuantity = extractFromAttributeWithDefaultObject(xmlSource, "minimumQuantity", 0);
    this.maximumQuantity = extractFromAttributeWithDefaultObject(xmlSource, "maximumQuantity", 0);
    this.ratio = extractFromAttributeWithDefaultObject(xmlSource, "ratio", 0);
}

AreaResource.prototype.getId = function() {
  return this.id;
};

AreaResource.prototype.getName = function() {
  return "";
};

AreaResource.prototype.getValue = function() {
  return "";
};

AreaResource.prototype.getRegionId = function() {
  return this.regionId;
};

AreaResource.prototype.getRegionName = function() {
  return _RegionData[this.regionId].getName();
};

AreaResource.prototype.getItemId = function() {
  return this.itemBaseId;
};

AreaResource.prototype.getItemName = function() {
  return _ItemBaseData[this.itemBaseId].getName();
};

AreaResource.prototype.getItemIcon = function() {
  return _ItemBaseData[this.itemBaseId].getIcon();
};

AreaResource.prototype.getMinimumQuantity = function() {
  return this.minimumQuantity;
};

AreaResource.prototype.getMaximumQuantity = function() {
  return this.maximumQuantity;
};

AreaResource.prototype.getRatio = function() {
  return Math.round(this.ratio * 100) +"%";
};

// Explore Specific
AreaResource.prototype.explore = function() {
  var result = [];
  return result.join("");
}

AreaResource.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "isIn") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Peut se trouver dans les régions suivantes:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Can be found in the following regions:</h2>';
  }
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Resources disponible dans la région:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Resources available in the region:</h2>';
}

AreaResource.prototype.exploreTableHeader = function(flavor) {
  if(flavor == "isIn") 
  {
    return '<thead><tr><th>Region Name</th><th>Minimum quantity</th><th>Maximum quantity</th><th>Ratio</th></tr></thead>';
  }
  return '<thead><tr><th></th><th>Item Name</th><th>Minimum quantity</th><th>Maximum quantity</th><th>Ratio</th></tr></thead>';
}

AreaResource.prototype.exploreInformation = function(flavor) {
  if(flavor == "isIn") 
  {
    return '<tr class="exploreItem" onclick="exploreId(\'' + this.getRegionId() + '\')" ><td>' + this.getRegionName() + '</td><td>' + this.getMinimumQuantity() + '</td><td>' + this.getMaximumQuantity() + '</td><td>' + this.getRatio() + '</td></tr>';
  }
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getItemId() + '\')" ><td><img src="' + this.getItemIcon() + '" ></td><td>' + this.getItemName() + '</td><td>' + this.getMinimumQuantity() + '</td><td>' + this.getMaximumQuantity() + '</td><td>' + this.getRatio() + '</td></tr>';
}