gdjs.OptionsCode = {};
gdjs.OptionsCode.GDOptionsTitleTextObjects1= [];
gdjs.OptionsCode.GDOptionsTitleTextObjects2= [];
gdjs.OptionsCode.GDOptionsTitleTextObjects3= [];
gdjs.OptionsCode.GDVolumeTextObjects1= [];
gdjs.OptionsCode.GDVolumeTextObjects2= [];
gdjs.OptionsCode.GDVolumeTextObjects3= [];
gdjs.OptionsCode.GDVolumeValueTextObjects1= [];
gdjs.OptionsCode.GDVolumeValueTextObjects2= [];
gdjs.OptionsCode.GDVolumeValueTextObjects3= [];
gdjs.OptionsCode.GDIncreaseVolumeTextObjects1= [];
gdjs.OptionsCode.GDIncreaseVolumeTextObjects2= [];
gdjs.OptionsCode.GDIncreaseVolumeTextObjects3= [];
gdjs.OptionsCode.GDDecreaseVolumeTextObjects1= [];
gdjs.OptionsCode.GDDecreaseVolumeTextObjects2= [];
gdjs.OptionsCode.GDDecreaseVolumeTextObjects3= [];
gdjs.OptionsCode.GDFullscreenTextObjects1= [];
gdjs.OptionsCode.GDFullscreenTextObjects2= [];
gdjs.OptionsCode.GDFullscreenTextObjects3= [];
gdjs.OptionsCode.GDFullscreenToggleObjects1= [];
gdjs.OptionsCode.GDFullscreenToggleObjects2= [];
gdjs.OptionsCode.GDFullscreenToggleObjects3= [];
gdjs.OptionsCode.GDBackTextObjects1= [];
gdjs.OptionsCode.GDBackTextObjects2= [];
gdjs.OptionsCode.GDBackTextObjects3= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.condition3IsTrue_0 = {val:false};


gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("FullscreenToggle"), gdjs.OptionsCode.GDFullscreenToggleObjects1);
gdjs.copyArray(runtimeScene.getObjects("VolumeValueText"), gdjs.OptionsCode.GDVolumeValueTextObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDVolumeValueTextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeValueTextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDFullscreenToggleObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDFullscreenToggleObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDFullscreenToggleObjects1Objects = Hashtable.newFrom({"FullscreenToggle": gdjs.OptionsCode.GDFullscreenToggleObjects1});gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDIncreaseVolumeTextObjects1Objects = Hashtable.newFrom({"IncreaseVolumeText": gdjs.OptionsCode.GDIncreaseVolumeTextObjects1});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDDecreaseVolumeTextObjects1Objects = Hashtable.newFrom({"DecreaseVolumeText": gdjs.OptionsCode.GDDecreaseVolumeTextObjects1});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDBackTextObjects1Objects = Hashtable.newFrom({"BackText": gdjs.OptionsCode.GDBackTextObjects1});gdjs.OptionsCode.eventsList2 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenToggle"), gdjs.OptionsCode.GDFullscreenToggleObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDFullscreenToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDFullscreenToggleObjects1 */
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.OptionsCode.GDFullscreenToggleObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDFullscreenToggleObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.OptionsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IncreaseVolumeText"), gdjs.OptionsCode.GDIncreaseVolumeTextObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
gdjs.OptionsCode.condition2IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDIncreaseVolumeTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.OptionsCode.condition1IsTrue_0.val ) {
{
gdjs.OptionsCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 100;
}}
}
if (gdjs.OptionsCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeValueText"), gdjs.OptionsCode.GDVolumeValueTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).add(10);
}{for(var i = 0, len = gdjs.OptionsCode.GDVolumeValueTextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeValueTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DecreaseVolumeText"), gdjs.OptionsCode.GDDecreaseVolumeTextObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
gdjs.OptionsCode.condition2IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDDecreaseVolumeTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.OptionsCode.condition1IsTrue_0.val ) {
{
gdjs.OptionsCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 0;
}}
}
if (gdjs.OptionsCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeValueText"), gdjs.OptionsCode.GDVolumeValueTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(10);
}{for(var i = 0, len = gdjs.OptionsCode.GDVolumeValueTextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeValueTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackText"), gdjs.OptionsCode.GDBackTextObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDBackTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDOptionsTitleTextObjects1.length = 0;
gdjs.OptionsCode.GDOptionsTitleTextObjects2.length = 0;
gdjs.OptionsCode.GDOptionsTitleTextObjects3.length = 0;
gdjs.OptionsCode.GDVolumeTextObjects1.length = 0;
gdjs.OptionsCode.GDVolumeTextObjects2.length = 0;
gdjs.OptionsCode.GDVolumeTextObjects3.length = 0;
gdjs.OptionsCode.GDVolumeValueTextObjects1.length = 0;
gdjs.OptionsCode.GDVolumeValueTextObjects2.length = 0;
gdjs.OptionsCode.GDVolumeValueTextObjects3.length = 0;
gdjs.OptionsCode.GDIncreaseVolumeTextObjects1.length = 0;
gdjs.OptionsCode.GDIncreaseVolumeTextObjects2.length = 0;
gdjs.OptionsCode.GDIncreaseVolumeTextObjects3.length = 0;
gdjs.OptionsCode.GDDecreaseVolumeTextObjects1.length = 0;
gdjs.OptionsCode.GDDecreaseVolumeTextObjects2.length = 0;
gdjs.OptionsCode.GDDecreaseVolumeTextObjects3.length = 0;
gdjs.OptionsCode.GDFullscreenTextObjects1.length = 0;
gdjs.OptionsCode.GDFullscreenTextObjects2.length = 0;
gdjs.OptionsCode.GDFullscreenTextObjects3.length = 0;
gdjs.OptionsCode.GDFullscreenToggleObjects1.length = 0;
gdjs.OptionsCode.GDFullscreenToggleObjects2.length = 0;
gdjs.OptionsCode.GDFullscreenToggleObjects3.length = 0;
gdjs.OptionsCode.GDBackTextObjects1.length = 0;
gdjs.OptionsCode.GDBackTextObjects2.length = 0;
gdjs.OptionsCode.GDBackTextObjects3.length = 0;

gdjs.OptionsCode.eventsList2(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
