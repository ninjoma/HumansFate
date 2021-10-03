gdjs.MenuCode = {};
gdjs.MenuCode.GDStartTextObjects1= [];
gdjs.MenuCode.GDStartTextObjects2= [];
gdjs.MenuCode.GDOptionsTextObjects1= [];
gdjs.MenuCode.GDOptionsTextObjects2= [];
gdjs.MenuCode.GDExitTextObjects1= [];
gdjs.MenuCode.GDExitTextObjects2= [];
gdjs.MenuCode.GDParticlesObjects1= [];
gdjs.MenuCode.GDParticlesObjects2= [];
gdjs.MenuCode.GDBCKGObjects1= [];
gdjs.MenuCode.GDBCKGObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsTextObjects1Objects = Hashtable.newFrom({"OptionsText": gdjs.MenuCode.GDOptionsTextObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartTextObjects1Objects = Hashtable.newFrom({"StartText": gdjs.MenuCode.GDStartTextObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitTextObjects1Objects = Hashtable.newFrom({"ExitText": gdjs.MenuCode.GDExitTextObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OptionsText"), gdjs.MenuCode.GDOptionsTextObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MenuCode.GDStartTextObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.MenuCode.GDExitTextObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDStartTextObjects1.length = 0;
gdjs.MenuCode.GDStartTextObjects2.length = 0;
gdjs.MenuCode.GDOptionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptionsTextObjects2.length = 0;
gdjs.MenuCode.GDExitTextObjects1.length = 0;
gdjs.MenuCode.GDExitTextObjects2.length = 0;
gdjs.MenuCode.GDParticlesObjects1.length = 0;
gdjs.MenuCode.GDParticlesObjects2.length = 0;
gdjs.MenuCode.GDBCKGObjects1.length = 0;
gdjs.MenuCode.GDBCKGObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
