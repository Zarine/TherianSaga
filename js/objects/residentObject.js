var Resident = function(xmlSource, fakeIdCreation) {
  this.constr = "Resident";
  
  if(fakeIdCreation === undefined) // parameter was omitted in call
	{
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.siteId = extractFromAttributeWithDefaultObject(xmlSource, "siteId", 0);
    this.iconId = extractFromAttributeWithDefaultObject(xmlSource, "iconId", 0);
    this.imageId = extractFromAttributeWithDefaultObject(xmlSource, "imageId", 0);
    
    this.stores = extractListObject(xmlSource, "stores");
  }
  else
  {
    this.id = 0;
    this.name = new LocalizedText(xmlSource, "name", "-");
    
    this.siteId = 0;
    this.iconId = 0;
    this.imageId = 0;
    
    this.stores = [];
  }
}

Resident.prototype.getId = function() {
  return this.id;
};

Resident.prototype.getName = function() {
  return this.name.getText();
};

Resident.prototype.getValue = function() {
  return "";
};

TaskGroup.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};
