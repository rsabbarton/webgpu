# Notes

General High Level Process for rendering with WebGPU:

1.  Check if WebGPU is supported
2.  Create a canvas
3.  Get GPU adapter
4.  Get GPU device
5.  Get canvas context
6.  Create Shader Module(s) for Vertex and fragment shader
7.  Create a render pipeline
8.  Create a renderPassDescriptor
9.  Render
    1.  Get a command encoder
    2.  Start render pass
    3.  Set pass render pipeline
    4.  Draw vertex buffer x times
    5.  End encoding to create command buffer
    6.  Submit command buffer to device queue

# Engine Design

Designing a graphics engine is not really necessary. Both Babylon and
ThreeJS are great engines that can be used to create 3D graphics. They
also both have support for WebGPU. I want to create an engine of my own
in order to get a better understanding of how WebGPU works and to learn
more about the graphics pipeline.

Some things to consider when designing an engine:

1.  Scene Graph
2.  Rendering Pipeline
3.  Resource Management
4.  Shaders
5.  Materials
6.  Lighting
7.  Camera
8.  Physics
9.  Input
10. Audio
11. Networking

My main focus will be on Pipelines, Shaders, Materials and Lighting. I
will then move on to building in cameras and integrating these into the
scene graph. This will be a Process of object rendering and will include
loading objects from different file types such as Wavefront OBJ as well
as STL (Stereo Lithography) files.


# Engine Planning

## Basic Design

 - Simplicity and Power
 - Common recognisable process

## High level process design

1. Instantiate Engine (link to existing canvas)
 - Engine to check for support and report back
2. Pre-load textures
3. Pre-load vertex arrays
4. Configure Renderer
5. Render



