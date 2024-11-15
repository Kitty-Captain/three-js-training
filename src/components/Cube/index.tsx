import { useKeyboardControls } from "@react-three/drei"
import { Controls } from "../../types/enums";
import { useFrame } from "@react-three/fiber";

export const Cube = () => {
    const forwardPressed = useKeyboardControls<Controls>(state => state.forward);
    const backPressed = useKeyboardControls<Controls>(state => state.back);
    const leftPressed = useKeyboardControls<Controls>(state => state.left);
    const rightPressed = useKeyboardControls<Controls>(state => state.right);

    useFrame((state) => {
        if (forwardPressed) state.camera.position.z -= 0.1
        if (backPressed) state.camera.position.z += 0.1
        if (leftPressed) {
            state.camera.position.x -= 0.01
            state.camera.rotation.y -= 0.01
        }
        if (rightPressed) {
            state.camera.position.x += 0.01
            state.camera.rotation.y += 0.01
        }
    });

    return (
        <mesh>
            <boxGeometry args={[1,1,1]} />
            <meshBasicMaterial color="orange" />
        </mesh>
    )
}