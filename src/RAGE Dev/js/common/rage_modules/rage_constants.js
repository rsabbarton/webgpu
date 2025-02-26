export const VALUES = []
export const VERTEX_TYPE_2D             = 1001; VALUES.push(1001)
export const VERTEX_TYPE_3D             = 1002; VALUES.push(1002)
export const VERTEX_TYPE_2DUV           = 1003; VALUES.push(1003)
export const VERTEX_TYPE_3DUV           = 1004; VALUES.push(1004)
export const VERTEX_TYPE_2DUVC          = 1005; VALUES.push(1005)
export const VERTEX_TYPE_3DUVC          = 1006; VALUES.push(1006)
export const VERTEX_TYPE_3DUVN          = 1007; VALUES.push(1007)
export const VERTEX_TYPE_3DUVCN         = 1008; VALUES.push(1008)


export const SHADER_TYPE_V3D_FCOL       = 2001; VALUES.push(2001)
export const SHADER_TYPE_V3D_FTEX       = 2002; VALUES.push(2002)
export const SHADER_TYPE_V3D_FTEXCOL    = 2003; VALUES.push(2003)

export const VIEW_MODE_3D_PERSPECTIVE   = 3001; VALUES.push(3001)
export const VIEW_MODE_2D               = 3002; VALUES.push(3002)
export const VIEW_MODE_3D_FIXED         = 3003; VALUES.push(3003)


export const MATRIX_TYPE_IDENTITY       = 4001; VALUES.push(4001)
export const MATRIX_TYPE_PERSPECTIVE    = 4002; VALUES.push(4002)
export const MATRIX_TYPE_ORTHOGRAPHIC   = 4003; VALUES.push(4003)
export const MATRIX_TYPE_ROTATION       = 4004; VALUES.push(4004)
export const MATRIX_TYPE_TRANSLATION    = 4005; VALUES.push(4005)



export function defExists(i){
    if(VALUES.includes(i)){
        return true
    } else {
        return false
    }
}