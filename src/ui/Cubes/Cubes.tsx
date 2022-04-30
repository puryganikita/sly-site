import React from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import CubesTitle from "./CubesTitle";

const Cubes = (props: any) => {
    return (<>
        <div className={cn('d-flex ai-center jc-center', styles.Cubes)}>
            <CubesTitle>Sly site</CubesTitle>
        </div>
    </>)
}

export default Cubes