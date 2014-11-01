var Zone = function(xmlSource, fakeIdCreation) {
  this.constr = "Zone";
    
  if(fakeIdCreation === undefined) // parameter was omitted in call
	{
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.siteId = extractFromAttributeWithDefaultObject(xmlSource, "siteId", 0);
    this.parentZoneId = extractFromAttributeWithDefaultObject(xmlSource, "parentZoneId", 0);
    
    this.zones = extractListObject(xmlSource, "zones");
    this.residents = extractListObject(xmlSource, "residents");
  }
  else
  {
    this.id = 0;
    this.name = new LocalizedText(xmlSource, "name", "-");
    
    this.siteId = 0;
    this.parentZoneId = 0;
    
    this.zones = [];
    this.residents = [];
  }
}

Zone.prototype.getId = function() {
  return this.id;
};

Zone.prototype.getName = function() {
  return this.name.getText();
};

Zone.prototype.getValue = function() {
  return "";
};

Zone.prototype.getSiteName = function() {
  return _SiteData[this.siteId].getName();
};