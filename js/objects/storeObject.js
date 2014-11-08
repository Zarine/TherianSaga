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

Store.prototype.getZoneId = function() {
  return this.zoneId;
};

Store.prototype.getZoneName = function() {
  return _ZoneData[this.zoneId].getName();
};

Store.prototype.getZoneSiteId = function() {
  return _ZoneData[this.zoneId].getId();
};

Store.prototype.getZoneSiteName = function() {
  return _ZoneData[this.zoneId].getSiteName();
};

Store.prototype.getResidentId = function() {
  return this.residentId;
};

Store.prototype.getResidentName = function() {
  return _ResidentData[this.residentId].getName();
};

// Explore Specific
Store.prototype.explore = function() {
  var result = [];

  // First set a Title
  result.push('<h1 class="exploreTitle title" id="' + this.getId() + '">' + this.getName() + ' / <span class="exploreItem" onclick="exploreId(\'' + this.getResidentId() + '\')" >"' + this.getResidentName() + '"</span> at <span class="exploreItem" onclick="exploreId(\'' + this.getZoneId() + '\')" >"' + this.getZoneName() + '"</span> in <span class="exploreItem" onclick="exploreId(\'' + this.getZoneSiteId() + '\')" >"' + this.getZoneSiteName() + '"</span></h1>');

  result.push( exploreList(this.sellItemBases, "shop") );

  return result.join("");
}

Store.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "soldIn") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Est vendu dans les magasins suivants:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Is sold in the following stores:</h2>';
  }
}

Store.prototype.exploreTableHeader = function(flavor) {
  return '<thead><tr><th>Name</th><th>Resident Name</th><th>Place Name</th><th>Site Name</th></tr></thead>';
}

Store.prototype.exploreInformation = function(flavor) {
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td>' + this.getName() + '</td><td>' + this.getResidentName() + '</td><td>' + this.getZoneName() + '</td><td>' + this.getZoneSiteName() + '</td></tr>';
}