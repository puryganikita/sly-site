import React, {useEffect, useState} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

const GlitchText = ({
    children,
    options,
}) => {
    const [classes, setClasses] = useState([])

    const glitch = (_interval, _timeout, _class) => {
        return setInterval(() => {
            setClasses(classes => [...classes, _class])

            setTimeout(() => {
                setClasses(classes => (
                    [...classes].splice(classes.findIndex(glitchClass => glitchClass === _class), 1)
                ))
            }, _timeout)
        }, _interval)
    }

    useEffect(() => {
        const intervals = [glitch(2000, 1000, styles.GlitchText__3)]

        options.forEach(option => {
            intervals.push(glitch(option.interval, option.timeout, option.class))
        })

        return () => {
            for (const interval of intervals) {
                clearInterval(interval)
            }
        }
    }, [])

    return (<>
        <div>
            {
                classes.length > 0 && classes.map((glitchClass, index) => (
                    <span className={cn(glitchClass)} key={index}>{children}</span>
                ))
            }
            <span className={cn({[styles.GlitchText__3]: classes.includes(styles.GlitchText__3)})}>{children}</span>
        </div>
    </>)
}

export default GlitchText
