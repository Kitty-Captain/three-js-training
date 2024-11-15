import { Canvas } from '@react-three/fiber';

import { Cube } from './components/Cube';

import './App.css';
import { Ground } from './components/Ground';
import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei';
import { useMemo } from 'react';
import { Controls } from './types/enums';

function App() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
    { name: Controls.jump, keys: ['Space'] },
  ], [])

  return (
    <KeyboardControls map={map}>
      <div id="canvas-container">
        <Canvas camera={{ position: [0, 0, 5] }}>

          <Ground position={[0, -2, 0]} />
          <Cube />
          <Ground position={[0, 2, 0]} />
        </Canvas>
      </div>
    </KeyboardControls>
  )
}

export default App
