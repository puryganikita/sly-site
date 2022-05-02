import React, {useEffect, useState} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

interface IOptionsProps {
    interval: number,
    timeout: number,
    class: any,
}

interface IProps {
    children: React.ReactNode,
    options: IOptionsProps[],
}

interface IGlitch {
    (interval: number, timeout: number, _class: any): any
}

const GlitchText = ({
    children,
    options,
}: IProps) => {
    const [classes, setClasses] = useState<any>([])

    const glitch: IGlitch = (_interval, _timeout, _class) => {
        return setInterval(() => {
            setClasses((classes: any) => [...classes, _class])

            setTimeout(() => {
                setClasses((classes: any) => (
                    [...classes].splice(classes.findIndex((glitchClass: string) => glitchClass === _class), 1)
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
                classes.length > 0 && classes.map((glitchClass: any, index: number) => (
                    <span className={cn(glitchClass)} key={index}>{children}</span>
                ))
            }
            <span className={cn({[styles.GlitchText__3]: classes.includes(styles.GlitchText__3)})}>{children}</span>
        </div>
    </>)
}

export default GlitchText
