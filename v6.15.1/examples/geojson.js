"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5346],{3069:function(e,t,o){var n=o(4132),r=o(2739),i=o(1118),l=o(1376),a=o(4354),w=o(7138),c=o(720),s=o(9039),y=o(7975),u=o(5783),g=o(9847),Z=o(1372),p=o(2010);const d=new w.Z({radius:5,fill:null,stroke:new c.Z({color:"red",width:1})}),m={Point:new s.ZP({image:d}),LineString:new s.ZP({stroke:new c.Z({color:"green",width:1})}),MultiLineString:new s.ZP({stroke:new c.Z({color:"green",width:1})}),MultiPoint:new s.ZP({image:d}),MultiPolygon:new s.ZP({stroke:new c.Z({color:"yellow",width:1}),fill:new y.Z({color:"rgba(255, 255, 0, 0.1)"})}),Polygon:new s.ZP({stroke:new c.Z({color:"blue",lineDash:[4],width:3}),fill:new y.Z({color:"rgba(0, 0, 255, 0.1)"})}),GeometryCollection:new s.ZP({stroke:new c.Z({color:"magenta",width:2}),fill:new y.Z({color:"magenta"}),image:new w.Z({radius:10,fill:null,stroke:new c.Z({color:"magenta"})})}),Circle:new s.ZP({stroke:new c.Z({color:"red",width:2}),fill:new y.Z({color:"rgba(255,0,0,0.2)"})})},P=new u.Z({features:(new i.Z).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,2e6],[8e6,-2e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-3e6,-1e6],[-4e6,1e6],[-5e6,-1e6]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[1e6,-75e4],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-3e6,6e6],[-3e6,8e6],[-5e6,8e6],[-5e6,6e6]]],[[[-2e6,6e6],[0,6e6],[0,8e6],[-2e6,8e6],[-2e6,6e6]]],[[[1e6,6e6],[3e6,6e6],[3e6,8e6],[1e6,8e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[3e6,-6e6],[2e6,-4e6],[1e6,-6e6]]]}]}}]})});P.addFeature(new r.Z(new n.Z([5e6,7e6],1e6)));const f=new Z.Z({source:P,style:function(e){return m[e.getGeometry().getType()]}});new l.Z({layers:[new p.Z({source:new g.Z}),f],target:"map",view:new a.ZP({center:[0,0],zoom:2})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(3069)}]);
//# sourceMappingURL=geojson.js.map