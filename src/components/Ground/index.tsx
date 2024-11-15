import { Vector3 } from "three";

type OwnProps = {
    position: [number,number,number];
}

export const Ground = (props: OwnProps) => {
    const vector = new Vector3(...props.position);

    return (
        <mesh receiveShadow position={vector}>
            <boxGeometry  args={[4, 0.1,1]} />
            <meshBasicMaterial color="green" />
        </mesh>
    )
}