var UnitType = function(xmlSource, fakeIdCreation) {
  this.constr = "UnitType";
  if(fakeIdCreation === undefined) // parameter was omitted in call
	{
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.parentUnitTypeId = extractFromAttributeWithDefaultObject(xmlSource, "parentUnitTypeId", 0);
  }
  else
  {
    this.id = 0;
    this.name = new LocalizedText(xmlSource, "name", "");
	
    this.parentUnitTypeId = 0;
  }
}

UnitType.prototype.getId = function() {
  return this.id;
};

UnitType.prototype.getName = function() {
  return this.name.getText();
};

UnitType.prototype.getValue = function() {
  return "";
};
