var Store = function(xmlSource) {
    this.constr = "Store";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");

    this.zoneId = extractFromAttributeWithDefaultObject(xmlSource, "zoneId", 0);
    this.residentId = extractFromAttributeWithDefaultObject(xmlSource, "residentId", 0);
    
    this.sellItemBases = extractListObject(xmlSource, "sellItemBases");
}

Store.prototype.getId = function() {
  return this.id;
};

Store.prototype.getName = function() {
  return this.name.getText();
};

Store.prototype.getValue = function() {
  return "";
};

Store.prototype.getZoneName = function() {
  return _ZoneData[this.zoneId].getName();
};

Store.prototype.getZoneSite = function() {
  return _ZoneData[this.zoneId].getSiteName();
};

Store.prototype.getResidentName = function() {
  return _ResidentData[this.residentId].getName();
};

// Explore Specific
Store.prototype.explore = function() {
  var result = [];
  return result.join("");
}

Store.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "soldIn") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Est vendu dans les magasins suivants:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Is sold in the follozing stores:</h2>';
  }
}

Store.prototype.exploreTableHeader = function(flavor) {
  return '<thead><tr><th>Name</th><th>Resident Name</th><th>Place Name</th><th>Site Name</th></tr></thead>';
}

Store.prototype.exploreInformation = function(flavor) {
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td>' + this.getName() + '</td><td>' + this.getResidentName() + '</td><td>' + this.getZoneName() + '</td><td>' + this.getZoneSite() + '</td></tr>';
}