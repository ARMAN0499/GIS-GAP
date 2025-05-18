var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_CitraGAP_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Citra GAP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CitraGAP_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13624646.378472, -491535.223590, 13627751.773166, -490681.287806]
                            })
                        });
var format_INFRASTRUKTUR_2 = new ol.format.GeoJSON();
var features_INFRASTRUKTUR_2 = format_INFRASTRUKTUR_2.readFeatures(json_INFRASTRUKTUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTRUKTUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTRUKTUR_2.addFeatures(features_INFRASTRUKTUR_2);
var lyr_INFRASTRUKTUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTRUKTUR_2, 
                style: style_INFRASTRUKTUR_2,
                popuplayertitle: "INFRASTRUKTUR",
                interactive: true,
    title: 'INFRASTRUKTUR<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_0.png" /> EFO 1<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_1.png" /> EFO 2<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_2.png" /> PIT 10<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_3.png" /> PIT 4B<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_4.png" /> PIT 7D<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_5.png" /> PIT 7E<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_6.png" /> PIT 9<br />\
    <img src="styles/legend/INFRASTRUKTUR_2_7.png" /> <br />'
        });
var format_ROAD1_3 = new ol.format.GeoJSON();
var features_ROAD1_3 = format_ROAD1_3.readFeatures(json_ROAD1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD1_3.addFeatures(features_ROAD1_3);
var lyr_ROAD1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD1_3, 
                style: style_ROAD1_3,
                popuplayertitle: "ROAD 1",
                interactive: true,
                title: '<img src="styles/legend/ROAD1_3.png" /> ROAD 1'
            });
var format_WIUPGAP_4 = new ol.format.GeoJSON();
var features_WIUPGAP_4 = format_WIUPGAP_4.readFeatures(json_WIUPGAP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPGAP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPGAP_4.addFeatures(features_WIUPGAP_4);
var lyr_WIUPGAP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUPGAP_4, 
                style: style_WIUPGAP_4,
                popuplayertitle: "WIUP GAP",
                interactive: true,
                title: '<img src="styles/legend/WIUPGAP_4.png" /> WIUP GAP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CitraGAP_1.setVisible(true);lyr_INFRASTRUKTUR_2.setVisible(true);lyr_ROAD1_3.setVisible(true);lyr_WIUPGAP_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CitraGAP_1,lyr_INFRASTRUKTUR_2,lyr_ROAD1_3,lyr_WIUPGAP_4];
lyr_INFRASTRUKTUR_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', 'Dok.': 'Dok.', });
lyr_ROAD1_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WIUPGAP_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_INFRASTRUKTUR_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', 'Dok.': 'TextEdit', });
lyr_ROAD1_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_WIUPGAP_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_INFRASTRUKTUR_2.set('fieldLabels', {'fid': 'no label', 'Id': 'inline label - always visible', 'Description': 'no label', 'Dok.': 'no label', });
lyr_ROAD1_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WIUPGAP_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WIUPGAP_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});