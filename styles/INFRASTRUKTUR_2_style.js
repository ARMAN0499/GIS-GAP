var size = 0;
var placement = 'point';
function categories_INFRASTRUKTUR_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'EFO 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,26,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EFO 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,210,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PIT 10':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,17,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PIT 4B':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,17,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PIT 7D':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,17,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PIT 7E':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,17,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PIT 9':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,17,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_INFRASTRUKTUR_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Id");
    var labelText = "";
    size = 0;
    var labelFont = "5.2px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Id") !== null) {
        labelText = String(feature.get("Id"));
    }
    
var style = categories_INFRASTRUKTUR_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
