
export function hexToRgb(hex) {
    hex = hex.replace('#', '');
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
        a: parseInt(hex.substring(6, 8), 16) || 255
    }
}

export function rgbToHex(r, g, b, a) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b + (a << 0)).toString(16).slice(1);
}


export const degToRad = d => d * Math.PI / 180;
export const radToDeg = r => r * 180 / Math.PI;

  