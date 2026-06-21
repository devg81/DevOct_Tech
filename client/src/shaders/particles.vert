// Ambient particle field — vertex shader
uniform float uTime;
attribute float aScale;
varying float vScale;

void main() {
  vec3 pos = position;
  pos.y += sin(uTime * 0.3 + position.x) * 0.15;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = aScale * (60.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  vScale = aScale;
}
