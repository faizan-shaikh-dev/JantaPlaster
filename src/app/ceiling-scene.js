"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function ArchitecturalCeiling({ activeView }) {
  const groupRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const speed = hovered ? 0.03 : 0.07;
      groupRef.current.rotation.y += delta * speed;
      groupRef.current.rotation.x = -0.22 + Math.sin(state.clock.elapsedTime * 0.4) * 0.02;
    }
  });

  const showFraming = activeView === "all" || activeView === "frame";
  const showPanels = activeView === "all" || activeView === "finished";
  const showLights = activeView === "all" || activeView === "lights" || activeView === "finished";

  return (
    <group
      ref={groupRef}
      position={[0, -0.05, 0]}
      rotation={[0.2, -0.4, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* 1. Suspension Drop Rods */}
      {showFraming && (
        <group name="suspension-rods">
          {[
            [-2.4, -2.4], [2.4, -2.4], [-2.4, 2.4], [2.4, 2.4],
            [-0.8, -2.4], [0.8, -2.4], [-2.4, 0], [2.4, 0],
            [-0.8, 2.4], [0.8, 2.4]
          ].map(([x, z], i) => (
            <group key={`rod-${i}`} position={[x, 1.25, z]}>
              <mesh castShadow>
                <cylinderGeometry args={[0.024, 0.024, 1.8, 8]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.2} />
              </mesh>
              <mesh position={[0, 0.9, 0]}>
                <boxGeometry args={[0.12, 0.06, 0.12]} />
                <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.25} />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* 2. Galvanized Iron (GI) Framing Channels */}
      {showFraming && (
        <group name="gi-channels" position={[0, 0.32, 0]}>
          {[-2.0, -1.0, 0, 1.0, 2.0].map((z, idx) => (
            <mesh key={`gi-x-${idx}`} position={[0, 0.04, z]} castShadow>
              <boxGeometry args={[5.2, 0.05, 0.05]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.25} />
            </mesh>
          ))}
          {[-2.2, -1.1, 0, 1.1, 2.2].map((x, idx) => (
            <mesh key={`gi-z-${idx}`} position={[x, -0.02, 0]} castShadow>
              <boxGeometry args={[0.05, 0.05, 5.2]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.75} roughness={0.3} />
            </mesh>
          ))}
        </group>
      )}

      {/* 3. Outer Suspended Gypsum Drop Box (Pristine White Gyproc) */}
      {showPanels && (
        <group name="gypsum-outer-perimeter">
          <mesh position={[0, 0.12, -2.15]} castShadow receiveShadow>
            <boxGeometry args={[5.2, 0.18, 0.9]} />
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.02} />
          </mesh>
          <mesh position={[0, 0.12, 2.15]} castShadow receiveShadow>
            <boxGeometry args={[5.2, 0.18, 0.9]} />
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.02} />
          </mesh>
          <mesh position={[-2.15, 0.12, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.9, 0.18, 3.4]} />
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.02} />
          </mesh>
          <mesh position={[2.15, 0.12, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.9, 0.18, 3.4]} />
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.02} />
          </mesh>

          {/* 4. Recessed Inner Slab Level */}
          <mesh position={[0, 0.28, 0]} receiveShadow>
            <boxGeometry args={[3.4, 0.08, 3.4]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.5} metalness={0.01} />
          </mesh>

          {/* 5. Center Decorative POP Island */}
          <mesh position={[0, 0.14, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.5, 0.14, 1.5]} />
            <meshStandardMaterial color="#fffbeb" roughness={0.4} metalness={0.05} />
          </mesh>
          <mesh position={[0, 0.05, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.08, 24]} />
            <meshStandardMaterial color="#f59e0b" roughness={0.25} metalness={0.5} />
          </mesh>
        </group>
      )}

      {/* 6. Recessed Warm LED Cove Lighting & COB Spotlights */}
      {showLights && (
        <group name="cove-lighting">
          <mesh position={[0, 0.22, -1.68]}>
            <boxGeometry args={[3.38, 0.03, 0.05]} />
            <meshStandardMaterial
              color="#ffb703"
              emissive="#f59e0b"
              emissiveIntensity={4.8}
            />
          </mesh>
          <mesh position={[0, 0.22, 1.68]}>
            <boxGeometry args={[3.38, 0.03, 0.05]} />
            <meshStandardMaterial
              color="#ffb703"
              emissive="#f59e0b"
              emissiveIntensity={4.8}
            />
          </mesh>
          <mesh position={[-1.68, 0.22, 0]}>
            <boxGeometry args={[0.05, 0.03, 3.38]} />
            <meshStandardMaterial
              color="#ffb703"
              emissive="#f59e0b"
              emissiveIntensity={4.8}
            />
          </mesh>
          <mesh position={[1.68, 0.22, 0]}>
            <boxGeometry args={[0.05, 0.03, 3.38]} />
            <meshStandardMaterial
              color="#ffb703"
              emissive="#f59e0b"
              emissiveIntensity={4.8}
            />
          </mesh>

          {/* Recessed COB Spot Downlights */}
          {[
            [-2.15, -2.15], [0, -2.15], [2.15, -2.15],
            [-2.15, 0], [2.15, 0],
            [-2.15, 2.15], [0, 2.15], [2.15, 2.15],
          ].map(([x, z], idx) => (
            <group key={`spot-${idx}`} position={[x, 0.02, z]}>
              <mesh>
                <cylinderGeometry args={[0.13, 0.13, 0.02, 16]} />
                <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
              </mesh>
              <mesh position={[0, -0.012, 0]}>
                <cylinderGeometry args={[0.09, 0.09, 0.015, 16]} />
                <meshStandardMaterial
                  color="#ffffff"
                  emissive="#fed7aa"
                  emissiveIntensity={3.8}
                />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* 7. Architectural Floor Stage with Reflection & Shadow Catch */}
      <mesh position={[0, -1.9, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[4.2, 48]} />
        <meshStandardMaterial
          color="#090d16"
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[0, -1.89, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.1, 4.2, 48]} />
        <meshBasicMaterial color="#f59e0b" opacity={0.35} transparent />
      </mesh>
    </group>
  );
}

export default function CeilingScene() {
  const [activeView, setActiveView] = useState("all");

  return (
    <div className="ceiling-scene-wrapper">
      {/* Sleek Minimal Top Hint */}
      <div className="scene-top-bar">
        <span className="art-live-pill">
          <span className="dot-live" /> 3D FALSE CEILING MODEL
        </span>
        <span className="scene-drag-hint">↻ Auto-Rotating 360°</span>
      </div>

      <Canvas
        camera={{ position: [6.8, 5.8, 7.2], fov: 36 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight
          position={[6, 9, 5]}
          intensity={2.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight
          position={[0, 0.6, 0]}
          color="#f59e0b"
          intensity={20}
          distance={8}
          decay={2}
        />
        <pointLight
          position={[-4, 2, -3]}
          color="#1e293b"
          intensity={4}
          distance={10}
          decay={2}
        />
        <ArchitecturalCeiling activeView={activeView} />
      </Canvas>

      {/* Layer View Pills */}
      <div className="scene-layer-controls" aria-label="3D Ceiling Layer View Controls">
        <button
          type="button"
          className={`layer-pill ${activeView === "all" ? "active" : ""}`}
          onClick={() => setActiveView("all")}
        >
          All Layers
        </button>
        <button
          type="button"
          className={`layer-pill ${activeView === "frame" ? "active" : ""}`}
          onClick={() => setActiveView("frame")}
        >
          GI Framing
        </button>
        <button
          type="button"
          className={`layer-pill ${activeView === "finished" ? "active" : ""}`}
          onClick={() => setActiveView("finished")}
        >
          Gypsum Panels
        </button>
        <button
          type="button"
          className={`layer-pill ${activeView === "lights" ? "active" : ""}`}
          onClick={() => setActiveView("lights")}
        >
          LED Cove Glow
        </button>
      </div>
    </div>
  );
}
