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

const Camera = forwardRef((props, ref) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();
    useImperativeHandle(ref, () => ({
        toTopFrontRight: (longestEdge) => {
            if (camera && controlsRef.current) {
                // adjust camera position based on a 200x200x200 BoxGeometry
                camera.position.x = 150 * longestEdge / 200;
                camera.position.y = 150 * longestEdge / 200;
                camera.position.z = 240 * longestEdge / 200;
                controlsRef.current.target.copy(new Vector3(0, 0, 0));
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

const ModelViewer = React.memo(({ geometry, coordinateSize }) => {
    const cameraRef = useRef();
    const canvasRef = useRef();
    const lightRef = useRef();
    const actions = {
        toTopFrontRight: () => {
            if (cameraRef.current && geometry) {
                const cameraInitialPosition = new Vector3(0, -Math.max(coordinateSize.x, coordinateSize.y, coordinateSize.z) * 2, coordinateSize.z / 2);
                geometry.computeBoundingBox();
                const boxMax = geometry.boundingBox.max;
                const boxMin = geometry.boundingBox.min;
                const longestEdge = Math.max(boxMax.x - boxMin.x, boxMax.y - boxMin.y, boxMax.z - boxMin.z);
                cameraRef.current.toTopFrontRight(longestEdge);
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
                    {/* <axesHelper args={[100]} /> */}
                    <mesh position={[0, 0, 0]}>
                        {geometry ? <primitive object={geometry} attach="geometry" /> : null}
                        <meshPhongMaterial color={0xa0a0a0} specular={0xb0b0b0} shininess={0} side={DoubleSide} />
                    </mesh>
                    <hemisphereLight color={0xdddddd} groundColor={0x666666} position={[0, 0, 1000]} />
                    <directionalLight ref={lightRef} color={0x666666} intensity={0.4} position={[0, -Math.max(coordinateSize.x, coordinateSize.y, coordinateSize.z) * 2, coordinateSize.z / 2]} />
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
    geometry: PropType.object,
    coordinateSize: PropType.object
};

export default ModelViewer;
