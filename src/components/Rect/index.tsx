import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

type OwnProps = {
    color: string;
    alphaTest?: number;
    args: [number, number, number];
    position: [number, number, number];
}

export const Rect = (props: OwnProps) => {
    const { position, color, args, alphaTest } = props;

    return (
        <RigidBody type="fixed">
            <Box position={position} args={args}>
                <meshBasicMaterial alphaTest={alphaTest} color={color} />
            </Box>
        </RigidBody>
    )
}