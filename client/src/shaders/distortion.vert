// Hover-morph distortion — vertex shader
uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;
  pos += normal * sin(uTime + position.y * 4.0) * uIntensity;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
