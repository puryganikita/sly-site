import React, { useRef } from 'react'
import { MeshDistortMaterial, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import texture from '../../assets/img/sphere_texture.jpg'

export default function Model({...props}) {
    const group = useRef()
    const {nodes, materials} = useGLTF('/sphere.gltf')

    const colorMap = useLoader(TextureLoader, texture)

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={.1}>
                    <mesh geometry={nodes.polySurface274_lambert1_0.geometry} material={materials.lambert1}>
                        <meshStandardMaterial map={colorMap} />
                        <MeshDistortMaterial
                            color='#80F10F'
                            attach='material'
                            distort={.4}
                            speed={3}
                            roughness={0}
                        />
                    </mesh>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/sphere.gltf')
