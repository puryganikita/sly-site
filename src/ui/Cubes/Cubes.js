import React, { Suspense } from 'react'
import cn from 'classnames'
import { Canvas } from '@react-three/fiber'

// styles
import styles from './index.module.scss'

// components
import CubesTitle from './CubesTitle'
import AnimatedSphere from '../AnimatedSphere/AnimatedSphere'
import { OrbitControls } from '@react-three/drei'
import Sphere from '../AnimatedSphere/Sphere'

const Cubes = props => {
    return (<>
        <div className={cn('d-flex ai-center jc-center', styles.Cubes)}>
            {/*<CubesTitle>Sly site</CubesTitle>*/}
            {/*<Canvas className={styles.sphere}>*/}
            {/*    <OrbitControls enableZoom={false}/>*/}
            {/*    <ambientLight intensity={0.5}/>*/}
            {/*    <directionalLight position={[-2, 5, 2]} intensity={1}/>*/}
            {/*    <Suspense fallback={null}>*/}
            {/*        <AnimatedSphere/>*/}
            {/*    </Suspense>*/}
            {/*</Canvas>*/}
            <Canvas className={styles.sphere}>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 10, 2]} intensity={1}/>
                <Suspense fallback={null}>
                    <Sphere/>
                </Suspense>
            </Canvas>
        </div>
    </>)
}

export default Cubes
