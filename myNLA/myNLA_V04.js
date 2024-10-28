/* V.04  EDU NLA Mod of Duik's NLA
================================================
2024  Ramiro Delgado ( Lyft Educational Content)
==============================================*/
//////  START MOD   //////
var nameTag = "edu.an::";

if(thisProperty.name.indexOf('Scale') >-1){
   nameTag = "edu.an::s";
}
if(thisProperty.name.indexOf('Position')>-1){
   nameTag = "edu.an::p"
}
if(thisProperty.name.indexOf('Opacity')>-1){
   nameTag = "edu.an::o"
}

//////  EDUs vars  //////
var editComp = thisComp;
var result = value;
var weights = 0;
var nlaTracks = [];
var firstNLA = true;
var first_layer = [];
var last_layer = [];
var mNlas = [];

//////   EDUs FNs  //////
function is_before(tocheck,stored){
   return !Boolean(is_after(tocheck,stored));
};

function is_after(tocheck,stored){
   if(tocheck > stored){
      return true
   };
   return false
};

function getLastKey(property){
   i = property.numKeys;
   x = property.key(i);
   return x;
};

function getFirstKey(property){
   x = property.key(1);
   return x;
};

function precomp_Prop(layer){
    var precomp = layer.source;
    var NLAlayer = precomp.layer(thisLayer.name);

    if(thisProperty.name.indexOf('Scale') >-1){
        prop = NLAlayer.scale;
     }
     if(thisProperty.name.indexOf('Position')>-1){
        prop = NLAlayer.position;
     }
     if(thisProperty.name.indexOf('Opacity')>-1){
        prop = NLAlayer.opacity;
     }
     return prop;
}; 
//////   END MOD   //////

/*== Duik: non-linear animation ==*/

/*
=== The following code uses DuAEF, the Duduf After Effects Framework ===
   Copyright (c) 2008 - 2022 Nicolas Dufresne, RxLaboratory, and contributors
   This code is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
*/

function isZero(a) {
   if (a instanceof Array) {
      for (var i = 0; i < a.length; i++) {
         if (a[i] != 0) return false;
      }
   }
   else if (a != 0) return false;
   return true;
};


for (var i = 1, n = thisComp.numLayers; i <= n; i++) {
    var l = thisComp.layer(i);

   if (l.name.indexOf(nameTag) != 0) continue; 
    //////  START MOD   //////
    mNlas.push(l.name);
    startTime = l.inPoint;
    endTime = l.outPoint;

   if(firstNLA){
      first = startTime;
      last = endTime;
      firstNLA = false;
   };

   if(is_after(endTime,last)){
      last = endTime;
      last_layer = thisComp.layer(i);
   };
   if(is_before(startTime,first)){
      first = startTime;
      first_layer = thisComp.layer(i);
   };
    //////   END MOD   //////
    /* === ORIGINAL DUIKs NLA === */      
    if (time >= l.inPoint && time < l.outPoint) {
        var prop = precomp_Prop(l);
        var precomp = l.source;
        var weight = l.opacity.value / 100;
        var t = time;
        try { 
            t = l.timeRemap.value; }
         catch (e) { 
            t = time - l.startTime; 
         }
        var dif = prop.valueAtTime(t) - value;
      if ( isZero(dif) ) continue;
      weights += weight;
      result += dif * weight;      
    };
    /* === Endof DUIKs NLA === */      
    //////   START MOD  //////
    if (time >= last && time <= thisLayer.outPoint){ 
        if(last_layer!=undefined)continue;
             
        var prop = precomp_Prop(last_layer);
        result = getLastKey(prop);
        result;
    };
    
    if (time <= first && time >= thisLayer.inPoint){
        if(first_layer!=undefined)continue;

        var prop = precomp_Prop(first_layer);
        result = getFirstKey(prop);
        result;
    };
};
    //////   END MOD   //////

result;