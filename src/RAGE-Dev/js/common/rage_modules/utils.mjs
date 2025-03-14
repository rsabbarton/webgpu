
export function hexToRgb(hex) {
    hex = hex.replace('#', '');
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
        a: parseInt(hex.substring(6, 8), 16) || 255
    }
}

export function rgbaToHex(r, g, b, a) {
    let hR = r.toString(16);
    let hG = g.toString(16);
    let hB = b.toString(16);
    let hA = a.toString(16);
    if (hR.length == 1) hR = '0' + hR;
    if (hG.length == 1) hG = '0' + hG;
    if (hB.length == 1) hB = '0' + hB;
    if (hA.length == 1) hA = '0' + hA;
    return '#' + hR + hG + hB + hA;

}
export function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b ).toString(16).slice(1);
}


export const degToRad = d => d * Math.PI / 180;
export const radToDeg = r => r * 180 / Math.PI;

  