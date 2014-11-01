var Site = function(xmlSource, fakeIdCreation) {
  this.constr = "Site";
  
  if(fakeIdCreation === undefined) // parameter was omitted in call
	{
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.signId = xmlSource.getAttribute("signId");
	  this.signIconId = xmlSource.getAttribute("signIconId");
	
    this.zones = extractListObject(xmlSource, "zones");
	  this.residents = extractListObject(xmlSource, "residents");
  }
  else
	{
	  this.id = 0;
	  this.name = new LocalizedText(xmlSource, "name", "-");
	  
	  this.signId = 0;
	  this.signIconId = 0;
	  
      this.zones = [];
      this.residents = [];
	}
}

Site.prototype.getId = function() {
  return this.id;
};

Site.prototype.getName = function() {
  return this.name.getText();
};

Site.prototype.getValue = function() {
  return "";
};