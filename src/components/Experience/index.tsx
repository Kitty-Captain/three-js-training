import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 10]} intensity={1} />
            <OrbitControls />
            <PerspectiveCamera castShadow makeDefault position={[10, 10, 25]} fov={30} />
        </>
    )
}