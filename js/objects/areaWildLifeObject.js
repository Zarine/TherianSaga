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
