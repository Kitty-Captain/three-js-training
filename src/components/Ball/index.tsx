import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

type OwnProps = {
    color: string;
    position: [number, number, number];
}

export const Ball = (props: OwnProps) => {
    const { position, color } = props;

    return (
        <RigidBody position={position} restitution={2}>
            <Sphere scale={0.2}>
                <meshStandardMaterial color={color} />
            </Sphere>
        </RigidBody>
    )
}