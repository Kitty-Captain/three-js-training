import { OrbitControls } from "@react-three/drei"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 10]} intensity={0.4} />
            <OrbitControls />
        </>
    )
}