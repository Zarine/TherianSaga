///////////////////
// Local Storage //
///////////////////

// Check for available local storage
if(typeof localStorage !== "undefined") { 
  if(localStorage.getItem("TherianSageDataExplorer_DataStored")) { 
    removeClass("hidden", document.getElementById('LoadFromLocalStorage'));
    removeClass("hidden", document.getElementById('ClearLocalStorage')); 
  }
}

function saveToLocalStorage() {
  localStorage.setItem("TherianSageDataExplorer_DataStored",true);
  localStorage.setItem("TherianSageDataExplorer_ItemBaseSkillData",JSON.stringify(_ItemBaseSkillData));
  localStorage.setItem("TherianSageDataExplorer_DungeonData",JSON.stringify(_DungeonData));
  localStorage.setItem("TherianSageDataExplorer_ItemTypeData",JSON.stringify(_ItemTypeData));
  localStorage.setItem("TherianSageDataExplorer_ItemBaseData",JSON.stringify(_ItemBaseData));
  localStorage.setItem("TherianSageDataExplorer_SiteData",JSON.stringify(_SiteData));
  localStorage.setItem("TherianSageDataExplorer_SkillData",JSON.stringify(_SkillData));
  localStorage.setItem("TherianSageDataExplorer_TaskGroupData",JSON.stringify(_TaskGroupData));
  localStorage.setItem("TherianSageDataExplorer_TaskData",JSON.stringify(_TaskData));
  localStorage.setItem("TherianSageDataExplorer_RecipeData",JSON.stringify(_RecipeData));
  localStorage.setItem("TherianSageDataExplorer_RecipeIngredientData",JSON.stringify(_RecipeIngredientData));
  localStorage.setItem("TherianSageDataExplorer_UnitTypeData",JSON.stringify(_UnitTypeData));
  localStorage.setItem("TherianSageDataExplorer_UnitBaseData",JSON.stringify(_UnitBaseData));
  localStorage.setItem("TherianSageDataExplorer_ImageData",JSON.stringify(_ImageData));
  localStorage.setItem("TherianSageDataExplorer_TerritoryData",JSON.stringify(_TerritoryData));
  localStorage.setItem("TherianSageDataExplorer_RegionData",JSON.stringify(_RegionData));
  localStorage.setItem("TherianSageDataExplorer_AreaWildlifeData",JSON.stringify(_AreaWildlifeData));
  localStorage.setItem("TherianSageDataExplorer_AreaResourceData",JSON.stringify(_AreaResourceData));
  localStorage.setItem("TherianSageDataExplorer_LandformData",JSON.stringify(_LandformData));
  localStorage.setItem("TherianSageDataExplorer_UnitBaseSkillData",JSON.stringify(_UnitBaseSkillData));
  localStorage.setItem("TherianSageDataExplorer_StoreData",JSON.stringify(_StoreData));
  localStorage.setItem("TherianSageDataExplorer_ResidentData",JSON.stringify(_ResidentData));
  localStorage.setItem("TherianSageDataExplorer_ZoneData",JSON.stringify(_ZoneData));
  removeClass("hidden", document.getElementById('LoadFromLocalStorage'));
  removeClass("hidden", document.getElementById('ClearLocalStorage')); 
}

function loadFromLocalStorage() {
  resetData();
  _ItemBaseSkillData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_ItemBaseSkillData"));
  _DungeonData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_DungeonData"));
  _ItemTypeData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_ItemTypeData"));
  _ItemBaseData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_ItemBaseData"));
  _SiteData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_SiteData"));
  _SkillData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_SkillData"));
  _TaskGroupData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_TaskGroupData"));
  _TaskData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_TaskData"));
  _RecipeData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_RecipeData"));
  _RecipeIngredientData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_RecipeIngredientData"));
  _UnitTypeData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_UnitTypeData"));
  _UnitBaseData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_UnitBaseData"));
  _ImageData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_ImageData"));
  _TerritoryData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_TerritoryData"));
  _RegionData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_RegionData"));
  _AreaWildlifeData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_AreaWildlifeData"));
  _AreaResourceData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_AreaResourceData"));
  _LandformData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_LandformData"));
  _UnitBaseSkillData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_UnitBaseSkillData"));
  _StoreData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_StoreData"));
  _ResidentData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_ResidentData"));
  _ZoneData = JSON.parse(localStorage.getItem("TherianSageDataExplorer_ZoneData"));
}

function clearLocalStorage() {
  localStorage.removeItem("TherianSageDataExplorer_DataStored");
  localStorage.removeItem("TherianSageDataExplorer_ItemBaseSkillData");
  localStorage.removeItem("TherianSageDataExplorer_DungeonData");
  localStorage.removeItem("TherianSageDataExplorer_ItemTypeData");
  localStorage.removeItem("TherianSageDataExplorer_ItemBaseData");
  localStorage.removeItem("TherianSageDataExplorer_SiteData");
  localStorage.removeItem("TherianSageDataExplorer_SkillData");
  localStorage.removeItem("TherianSageDataExplorer_TaskGroupData");
  localStorage.removeItem("TherianSageDataExplorer_TaskData");
  localStorage.removeItem("TherianSageDataExplorer_RecipeData");
  localStorage.removeItem("TherianSageDataExplorer_RecipeIngredientData");
  localStorage.removeItem("TherianSageDataExplorer_UnitTypeData");
  localStorage.removeItem("TherianSageDataExplorer_UnitBaseData");
  localStorage.removeItem("TherianSageDataExplorer_ImageData");
  localStorage.removeItem("TherianSageDataExplorer_TerritoryData");
  localStorage.removeItem("TherianSageDataExplorer_RegionData");
  localStorage.removeItem("TherianSageDataExplorer_AreaWildlifeData");
  localStorage.removeItem("TherianSageDataExplorer_AreaResourceData");
  localStorage.removeItem("TherianSageDataExplorer_LandformData");
  localStorage.removeItem("TherianSageDataExplorer_UnitBaseSkillData");
  localStorage.removeItem("TherianSageDataExplorer_StoreData");
  localStorage.removeItem("TherianSageDataExplorer_ResidentData");
  localStorage.removeItem("TherianSageDataExplorer_ZoneData");
  addClass("hidden", document.getElementById('LoadFromLocalStorage'));
  addClass("hidden", document.getElementById('ClearLocalStorage'));
}