import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

function NoseDot({ nosePosition }) {
  const { camera } = useThree();
  if (!nosePosition) return null;

  const { x, y, z } = nosePosition;

  // 1. Center coordinates
  // x and y are normalized [0,1], Three.js is NDC [-1, 1]
  // 0.5 is middle of the screen (0-0.5-1)
  // multiply by 2 to scale to [-1, 1]
  const xC = (x - 0.5) * 2;
  const yC = -(y - 0.5) * 2; // In 3D positive Y goes up, but in images it goes down, thats why "-"

  // 2. Depth in camera space (adjust MediaPipe z scale)
  const depth = 5 + z * 10; // tweak factor as needed

  // 3. Convert normalized to view-plane size
  const fov = (camera.fov * Math.PI) / 180; // fov - field of view
  const height = 2 * Math.tan(fov / 2) * depth;
  const width = height * camera.aspect;

  const worldX = xC * (width / 2);
  const worldY = yC * (height / 2);
  const worldZ = -depth; // negative Z forward

  // 4. Camera space → world space
  const worldPos = new Vector3(worldX, worldY, worldZ).applyMatrix4(
    camera.matrixWorld
  );

  return (
    <mesh position={[worldPos.x, worldPos.y, worldPos.z]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default NoseDot;
