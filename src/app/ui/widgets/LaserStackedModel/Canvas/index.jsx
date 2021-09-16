import React, {
    useRef,
    useEffect,
    forwardRef,
    useImperativeHandle
} from 'react';
import { render, unmountComponentAtNode, useThree } from '@react-three/fiber';
import { Vector3, DoubleSide } from 'three';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import PropType from 'prop-types';
import SvgIcon from '../../../components/SvgIcon';

const size = { x: 100, y: 100, z: 100 };

function getCameraPositionByRotation(positionStart, target, angleEW, angleNS) {
    const positionRotateNS = {
        x: positionStart.x,
        y: target.y + (positionStart.y - target.y) * Math.cos(angleNS) - (positionStart.z - target.z) * Math.sin(angleNS),
        z: target.z + (positionStart.y - target.y) * Math.sin(angleNS) + (positionStart.z - target.z) * Math.cos(angleNS)
    };

    const positionRotateEW = {
        x: target.x + (positionRotateNS.x - target.x) * Math.cos(angleEW) - (positionRotateNS.y - target.y) * Math.sin(angleEW),
        y: target.y + (positionRotateNS.x - target.x) * Math.sin(angleEW) + (positionRotateNS.y - target.y) * Math.cos(angleEW),
        z: positionRotateNS.z
    };

    return positionRotateEW;
}

const Camera = forwardRef((props, ref) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();
    useImperativeHandle(ref, () => ({
        camera,
        toTopFrontRight: () => {
            if (camera && controlsRef.current) {
                const cameraInitialPosition = new Vector3(0, -Math.max(size.x, size.y, size.z) * 2, size.z / 2);
                const positionStart = cameraInitialPosition;
                const target = { x: 0, y: 0, z: cameraInitialPosition.z };
                const position = getCameraPositionByRotation(positionStart, target, Math.PI / 6, -Math.PI / 1.5);
                // const position = getCameraPositionByRotation(positionStart, target, Math.PI / 6, -Math.PI / 10);
                console.log(position);
                camera.position.x = position.x;
                camera.position.y = position.y;
                camera.position.z = position.z;
                // camera.position.copy(new Vector3(100 / 2, 100, 100));
                // camera.position.copy(new Vector3(30 * 2.5, 30 * 2.5, 50 * 2.5));
                // camera.position.copy(new Vector3(30 * 2.5 * 31 / 100, 30 * 2.5 * 31 / 100, 50 * 2.5 * 31 / 100));
                // camera.position.copy(new Vector3(30 * 2.5 * 166 / 100, 30 * 2.5 * 166 / 100, 50 * 2.5 * 166 / 100));
                // camera.up.copy(new Vector3(0, 1, 0));
                // camera.position.copy(cameraInitialPosition);
                // camera.rotateX(Math.PI / 2);
                // camera.rotateZ(Math.PI / 2);
                controlsRef.current.target.copy(new Vector3(0, 0, 0 && cameraInitialPosition.z));
                controlsRef.current.update();
            }
        }
    }));
    return (
        <>
            <PerspectiveCamera far={10000} near={0.1} fov={45} aspect={1} />
            <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} enableDamping={false} />
        </>
    );
});

const ModelViewer = React.memo(({ geometry }) => {
    const cameraRef = useRef();
    const canvasRef = useRef();
    const lightRef = useRef();
    const actions = {
        toTopFrontRight: () => {
            if (cameraRef.current) {
                const cameraInitialPosition = new Vector3(0, -Math.max(size.x, size.y, size.z) * 2, size.z / 2);
                cameraRef.current.toTopFrontRight();
                lightRef.current.position.copy(cameraInitialPosition);
            }
        },
        onCreated: () => {
            actions.toTopFrontRight();
        }
    };
    useEffect(() => {
        if (geometry) {
            const node = (
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <Camera ref={cameraRef} />
                    {/* <gridHelper args={[100, 100]} /> */}
                    <axesHelper args={[100]} />
                    <mesh position={[0, 0, 0]}>
                        {geometry ? <primitive object={geometry} attach="geometry" /> : null}
                        <meshPhongMaterial color={0xa0a0a0} specular={0xb0b0b0} shininess={0} side={DoubleSide} />
                    </mesh>
                    <hemisphereLight color={0xdddddd} groundColor={0x666666} position={[0, 0, 1000]} />
                    <directionalLight ref={lightRef} color={0x666666} intensity={0.4} position={[0, -Math.max(size.x, size.y, size.z) * 2, size.z / 2]} />
                </group>
            );
            render(node, canvasRef.current, { frameloop: 'demand', onCreated: actions.onCreated });
            actions.toTopFrontRight();
        }
    }, [geometry]);
    useEffect(() => {
        return () => {
            unmountComponentAtNode(canvasRef.current);
        };
    }, []);
    return (
        <div>
            <canvas ref={canvasRef} width="196" height="196" />
            <div style={{ position: 'absolute', bottom: '1px', left: '5px' }}>
                <SvgIcon
                    name="ViewIsometric"
                    hoversize={14}
                    size={12}
                    onClick={actions.toTopFrontRight}
                />
            </div>
        </div>
    );
});
ModelViewer.propTypes = {
    geometry: PropType.object
};

export default ModelViewer;
