var Site = function(xmlSource) {
    this.constr = "Site";

    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.signId = xmlSource.getAttribute("signId");
	this.signIconId = xmlSource.getAttribute("signIconId");
	
    this.zones = extractListObject(xmlSource, "zones");
	this.residents = extractListObject(xmlSource, "residents");
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