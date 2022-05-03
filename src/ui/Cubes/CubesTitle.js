import React, {useMemo} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import GlitchText from "../GlitchText/GlitchText";

const CubesTitle = ({
    children
}) => {
    const glitchOptions = useMemo(() => [
        {
            interval: 2500,
            timeout: 50,
            class: styles.GlitchText__1,
        },
        {
            interval: 3500,
            timeout: 100,
            class: styles.GlitchText__1,
        },
        {
            interval: 1500,
            timeout: 50,
            class: styles.GlitchText__2,
        },
        {
            interval: 2000,
            timeout: 50,
            class: styles.GlitchText__4,
        },
    ], [])

    return (<>
        <h1 className={cn(styles.Cubes__Title)}>
            <GlitchText options={glitchOptions}>{children}</GlitchText>
        </h1>
    </>)
}

export default CubesTitle
