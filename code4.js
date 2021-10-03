gdjs.EndScreenCode = {};
gdjs.EndScreenCode.GDEndObjects1= [];
gdjs.EndScreenCode.GDEndObjects2= [];
gdjs.EndScreenCode.GDbacktextObjects1= [];
gdjs.EndScreenCode.GDbacktextObjects2= [];
gdjs.EndScreenCode.GDwinnertextObjects1= [];
gdjs.EndScreenCode.GDwinnertextObjects2= [];

gdjs.EndScreenCode.conditionTrue_0 = {val:false};
gdjs.EndScreenCode.condition0IsTrue_0 = {val:false};
gdjs.EndScreenCode.condition1IsTrue_0 = {val:false};
gdjs.EndScreenCode.condition2IsTrue_0 = {val:false};


gdjs.EndScreenCode.mapOfGDgdjs_46EndScreenCode_46GDbacktextObjects1Objects = Hashtable.newFrom({"backtext": gdjs.EndScreenCode.GDbacktextObjects1});gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("backtext"), gdjs.EndScreenCode.GDbacktextObjects1);

gdjs.EndScreenCode.condition0IsTrue_0.val = false;
gdjs.EndScreenCode.condition1IsTrue_0.val = false;
{
gdjs.EndScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_46EndScreenCode_46GDbacktextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndScreenCode.condition0IsTrue_0.val ) {
{
gdjs.EndScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.EndScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDEndObjects1.length = 0;
gdjs.EndScreenCode.GDEndObjects2.length = 0;
gdjs.EndScreenCode.GDbacktextObjects1.length = 0;
gdjs.EndScreenCode.GDbacktextObjects2.length = 0;
gdjs.EndScreenCode.GDwinnertextObjects1.length = 0;
gdjs.EndScreenCode.GDwinnertextObjects2.length = 0;

gdjs.EndScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
