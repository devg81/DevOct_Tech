// Hover-morph distortion — fragment shader
uniform vec3 uColor;
varying vec2 vUv;

void main() {
  vec3 color = mix(uColor, vec3(1.0), vUv.y * 0.2);
  gl_FragColor = vec4(color, 1.0);
}
