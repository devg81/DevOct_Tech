// Ambient particle field — fragment shader
uniform vec3 uColor;
varying float vScale;

void main() {
  float d = length(gl_PointCoord - vec2(0.5));
  float alpha = smoothstep(0.5, 0.0, d) * 0.8;
  gl_FragColor = vec4(uColor, alpha);
}
