import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Wave2Frag from "../glsl/wave2.fragshader?raw"

function ShaderPlane() {
  const meshRef = useRef();
  const mousePos = useRef(new THREE.Vector2(0, 0));
  const formerPosition = useRef(new THREE.Vector2(0, 1)); 
  const hoverActive = useRef(0);

  useFrame((state) => {
    const { clock, mouse, viewport } = state;
    const material = meshRef.current.material;
    const movement_tolerance = 0.001;
    const movement = mouse.distanceTo(formerPosition.current);

    material.uniforms.uTime.value = clock.getElapsedTime();
    if (Math.abs(mouse.x) <= 1 && Math.abs(mouse.y) <= 1) {
       hoverActive.current = 1;
    } else {
       hoverActive.current = 0;
    }
    if (movement<movement_tolerance) {
      hoverActive.current = 0;
    } else {
      formerPosition.current.copy(mouse);
    }

    const mouseX = (mouse.x + 1) / 2;
    const mouseY = (mouse.y + 1) / 2;
    material.uniforms.uMouse.value.set(mouseX, mouseY);
    material.uniforms.uAspect.value = viewport.aspect;

    const targetHover = hoverActive.current;
    const currentHover = material.uniforms.uHover.value;
    material.uniforms.uHover.value = THREE.MathUtils.lerp(currentHover, targetHover, 0.01);
  });

  return (
    <mesh 
      ref={meshRef}
      >
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0 },
          uResolution: {value: new THREE.Vector2()},
          uMouse: { value: new THREE.Vector2(0, 0) },
          uAspect:{ value:1.0 },
          uHover: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={Wave2Frag}
      />
    </mesh>
  );
}

export const BackgroundShaderView = ({ className }) => (
  <Canvas
    className={className}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: -100,
      background: "black",
    }}
    camera={{ position: [0, 0, 1] }}
  >
    <ShaderPlane />
  </Canvas>
);