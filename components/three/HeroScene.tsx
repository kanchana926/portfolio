"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PRIMARY_NODE = "#57cc99";
const SECONDARY_NODE = "#38a3a5";
const PRIMARY_LINE = "#38a3a5";
const SECONDARY_LINE = "#57cc99";
const PARTICLE = "#80ed99";

function makeCloud(count: number, spread: [number, number, number]) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    pts.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * spread[0],
        (Math.random() - 0.5) * spread[1],
        (Math.random() - 0.5) * spread[2]
      )
    );
  }
  const positions = new Float32Array(pts.length * 3);
  pts.forEach((p, i) => {
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
  });
  return { pts, positions };
}

function makeLines(pts: THREE.Vector3[], maxDist: number) {
  const linePts: number[] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      if (pts[i].distanceTo(pts[j]) < maxDist) {
        linePts.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
  }
  return new Float32Array(linePts);
}

function NetworkGraph({ count, animate, parallax }: { count: number; animate: boolean; parallax: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const eased = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!parallax) return;
    const handleMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [parallax]);

  const { primaryPositions, secondaryPositions, linePositions, secondaryLinePositions, particlePositions } =
    useMemo(() => {
      const primaryCount = Math.round(count * 0.68);
      const secondaryCount = count - primaryCount;

      const primary = makeCloud(primaryCount, [8.5, 6, 3.5]);
      const secondary = makeCloud(secondaryCount, [9, 6.5, 4]);
      const particles = makeCloud(Math.max(6, Math.round(count * 0.3)), [10, 7, 5]);

      return {
        primaryPositions: primary.positions,
        secondaryPositions: secondary.positions,
        linePositions: makeLines(primary.pts, 2.1),
        secondaryLinePositions: makeLines(secondary.pts, 2.4),
        particlePositions: particles.positions,
      };
    }, [count]);

  useFrame((_, delta) => {
    if (!group.current) return;

    if (animate) {
      group.current.rotation.y += delta * 0.032;
      group.current.rotation.x = Math.sin(Date.now() * 0.00008) * 0.06;
    }

    if (parallax) {
      eased.current.x += (pointer.current.x - eased.current.x) * 0.03;
      eased.current.y += (pointer.current.y - eased.current.y) * 0.03;
      group.current.rotation.y += eased.current.x * 0.12 * delta;
      group.current.rotation.x += -eased.current.y * 0.08 * delta;
      group.current.position.x = eased.current.x * 0.25;
      group.current.position.y = -eased.current.y * 0.15;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[primaryPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={PRIMARY_NODE} size={0.045} sizeAttenuation transparent opacity={0.45} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[secondaryPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={SECONDARY_NODE} size={0.04} sizeAttenuation transparent opacity={0.35} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={PARTICLE} size={0.022} sizeAttenuation transparent opacity={0.25} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={PRIMARY_LINE} transparent opacity={0.12} />
      </lineSegments>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[secondaryLinePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={SECONDARY_LINE} transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene({ reduced = false }: { reduced?: boolean }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 760;
  const count = isMobile ? 14 : 32;

  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "none", background: "transparent" }}
    >
      <NetworkGraph count={count} animate={!reduced} parallax={!reduced && !isMobile} />
    </Canvas>
  );
}
