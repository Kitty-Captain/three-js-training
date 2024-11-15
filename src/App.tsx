import { Canvas } from '@react-three/fiber';

import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { Suspense, useMemo, useState } from 'react';
import './App.css';
import { Ball } from './components/Ball';
import { Experience } from './components/Experience';
import { Rect } from './components/Rect';
import { Controls } from './types/enums';

type BallsProps = {
  position: [number, number, number];
  color: string;
}

function App() {
  const [balls, setBalls] = useState<BallsProps[]>([]);
  console.log("🚀 ~ App ~ balls:", balls)

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
    { name: Controls.jump, keys: ['Space'] },
  ], [])

  const getRandomColor = () => {
    const colorCode = Math.floor(Math.random() * 16777215).toString(16);

    return `#${colorCode}`;
  };
  const getRandomCoordinate = (isAllowNegative?: boolean) => {
    const coordinate = Math.random() * 4 + 1;

    if (isAllowNegative && Math.random() < 0.5) {
      return coordinate * -1;
    }

    return coordinate;
  }
  const addBall = () => {
    const x = getRandomCoordinate(true);
    const y = getRandomCoordinate();
    const z = getRandomCoordinate(true);

    console.log(x, y, z)
    setBalls((prevBalls) => ([...prevBalls, { position: [x, y, z], color: getRandomColor() }]))
  }

  return (
    <KeyboardControls map={map}>
      <div id="canvas-container">
        <button id="addBallBtn" onClick={addBall}>Add a ball</button>

        <Canvas shadows camera={{ position: [10, 10, 25], fov: 30 }}>
          <Experience />

          <Suspense>
            <Physics>
              {balls.map(({ position, color }) => <Ball position={position} color={color} />)}

              {/* WALLS */}
              <Rect position={[-5.5, 3.5, 0]} args={[1, 10, 10]} alphaTest={100} color="green" />
              <Rect position={[5.5, 3.5, 0]} args={[1, 10, 10]} alphaTest={100} color="green" />
              <Rect position={[0, 3.5, 5.5]} args={[10, 10, 1]} alphaTest={100} color="green" />
              <Rect position={[0, 3.5, -5.5]} args={[10, 10, 1]} alphaTest={100} color="green" />

              {/* FLOOR */}
              <Rect position={[0, -1, 0]} args={[10, 1, 10]} color="green" />
            </Physics>
          </Suspense>
        </Canvas>
      </div>
    </KeyboardControls>
  )
}

export default App
