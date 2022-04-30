import React from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import GlitchText from "../GlitchText/GlitchText";

interface IProps {
    children: React.ReactNode
}

const CubesTitle = ({
    children
}: IProps) => {
    return (<>
        <h1 className={cn(styles.Cubes__Title)}>
            <GlitchText>{children}</GlitchText>
        </h1>
    </>)
}

export default CubesTitle