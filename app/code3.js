gdjs.DeathScreenCode = {};
gdjs.DeathScreenCode.GDTitleTextObjects1= [];
gdjs.DeathScreenCode.GDTitleTextObjects2= [];
gdjs.DeathScreenCode.GDCauseOfDeathTextObjects1= [];
gdjs.DeathScreenCode.GDCauseOfDeathTextObjects2= [];
gdjs.DeathScreenCode.GDRetryTextObjects1= [];
gdjs.DeathScreenCode.GDRetryTextObjects2= [];

gdjs.DeathScreenCode.conditionTrue_0 = {val:false};
gdjs.DeathScreenCode.condition0IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition1IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition2IsTrue_0 = {val:false};


gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRetryTextObjects1Objects = Hashtable.newFrom({"RetryText": gdjs.DeathScreenCode.GDRetryTextObjects1});gdjs.DeathScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CauseOfDeathText"), gdjs.DeathScreenCode.GDCauseOfDeathTextObjects1);
{for(var i = 0, len = gdjs.DeathScreenCode.GDCauseOfDeathTextObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDCauseOfDeathTextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RetryText"), gdjs.DeathScreenCode.GDRetryTextObjects1);

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
gdjs.DeathScreenCode.condition1IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRetryTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DeathScreenCode.condition0IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DeathScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};

gdjs.DeathScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathScreenCode.GDTitleTextObjects1.length = 0;
gdjs.DeathScreenCode.GDTitleTextObjects2.length = 0;
gdjs.DeathScreenCode.GDCauseOfDeathTextObjects1.length = 0;
gdjs.DeathScreenCode.GDCauseOfDeathTextObjects2.length = 0;
gdjs.DeathScreenCode.GDRetryTextObjects1.length = 0;
gdjs.DeathScreenCode.GDRetryTextObjects2.length = 0;

gdjs.DeathScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['DeathScreenCode'] = gdjs.DeathScreenCode;
