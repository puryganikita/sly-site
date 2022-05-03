import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = () => {
    return (
        <Sphere visible args={[1, 100, 200]}>
            <MeshDistortMaterial
                color='#8352fd'
                attach='material'
                distort={0.3}
                speed={3}
                roughness={0}
            />
        </Sphere>
    )
}

export default AnimatedSphere
