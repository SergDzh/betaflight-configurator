import { View, Map, Feature } from "ol";
import { fromLonLat } from "ol/proj";
import { Group as LayerGroup, Tile, Vector as LayerVector } from "ol/layer";
import { OSM, XYZ, Vector as SourceVector } from "ol/source";
import { Icon, Style } from "ol/style";
import { Point } from "ol/geom";

const DEFAULT_ZOOM = 16,
    DEFAULT_LON = 0,
    DEFAULT_LAT = 0,
    ICON_IMAGE_GPS = "/images/icons/cf_icon_position.png",
    ICON_IMAGE_MAG = "/images/icons/cf_icon_position_mag.png",
    ICON_IMAGE_NOFIX = "/images/icons/cf_icon_position_nofix.png";

export function initMap() {
    const lonLat = fromLonLat([DEFAULT_LON, DEFAULT_LAT]);

    const mapView = new View({
        center: lonLat,
        zoom: DEFAULT_ZOOM,
    });

    const osmLayer = new Tile({
        source: new OSM(),
    });

    const googleSatLayer = new Tile({
        source: new XYZ({
            url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
            maxZoom: DEFAULT_ZOOM,
        }),
    });

    const googleHybridLayer = new Tile({
        source: new XYZ({
            url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            maxZoom: DEFAULT_ZOOM,
        }),
    });

    const map = new Map({
        target: "map",
        layers: [
            osmLayer,
            googleSatLayer,
            googleHybridLayer,
        ],
        view: mapView,
        controls: [],
    });

    const iconGPS = new Icon({
        anchor: [0.5, 1],
        opacity: 1,
        scale: 0.5,
        src: ICON_IMAGE_GPS,
    });

    const iconMag = new Icon({
        anchor: [0.5, 1],
        opacity: 1,
        scale: 0.5,
        src: ICON_IMAGE_MAG,
    });

    const iconNoFix = new Icon({
        anchor: [0.5, 1],
        opacity: 1,
        scale: 0.5,
        src: ICON_IMAGE_NOFIX,
    });

    const iconStyleGPS = new Style({
        image: iconGPS,
    });

    const iconStyleMag = new Style({
        image: iconMag,
    });

    const iconStyleNoFix = new Style({
        image: iconNoFix,
    });

    const iconGeometry = new Point(lonLat);

    const iconFeature = new Feature({
        geometry: iconGeometry,
    });

    iconFeature.setStyle(iconStyleGPS);

    const vectorSource = new SourceVector({
        features: [iconFeature],
    });

    const currentPositionLayer = new LayerVector({
        source: vectorSource,
    });

    map.addLayer(currentPositionLayer);

    $('#mapview').click(function (e) {
        switch (e.target.text) {
            case 'R':
                if (osmLayer.isVisible()) {
                    osmLayer.setVisible(false);
                    googleSatLayer.setVisible(true);
                    googleHybridLayer.setVisible(false);
                } else {
                    osmLayer.setVisible(true);
                    googleSatLayer.setVisible(false);
                    googleHybridLayer.setVisible(false);
                }
                break;
            case 'S':
                if (googleSatLayer.isVisible()) {
                    osmLayer.setVisible(false);
                    googleSatLayer.setVisible(false);
                    googleHybridLayer.setVisible(true);
                } else {
                    osmLayer.setVisible(false);
                    googleSatLayer.setVisible(true);
                    googleHybridLayer.setVisible(false);
                }
                break;
            case 'H':
                if (googleHybridLayer.isVisible()) {
                    osmLayer.setVisible(true);
                    googleSatLayer.setVisible(false);
                    googleHybridLayer.setVisible(false);
                } else {
                    osmLayer.setVisible(false);
                    googleSatLayer.setVisible(false);
                    googleHybridLayer.setVisible(true);
                }
                break;
        }
    });

    return {
        mapView,
        iconStyleMag,
        iconStyleGPS,
        iconStyleNoFix,
        iconFeature,
        iconGeometry,
    };
}
