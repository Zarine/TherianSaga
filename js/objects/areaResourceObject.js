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