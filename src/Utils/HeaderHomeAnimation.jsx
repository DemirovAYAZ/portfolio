import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "@react-hook/media-query";
import '../Pages/Home/Home.css';

const HomeAnimation = () => {
  const earth = useGLTF("./gltf/HeaderHome/scene.gltf");
  const group = useRef();

  useFrame((state, delta) => {
    group.current.rotation.x += 0.002;
  });

  return (
    <group ref={group}>
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    </group>
  );
};

const HeaderHomeAnimation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 992px)");

  const canvasStyle = {
    width : isMobile ? "300px" : (isTablet ? "400px" : "450px"),
    height : isMobile ? "300px" : (isTablet ? "400px" : "450px")
  };

  return (
    <Canvas
      id="canvas"
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={canvasStyle}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enableRotate={true}
          enablePan={false}  
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <HomeAnimation />
      </Suspense>
    </Canvas>
  );
};

export default HeaderHomeAnimation;
