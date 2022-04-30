import React, {useEffect, useState} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

interface IProps {
    children: React.ReactNode
}

interface IGlitch {
    (interval: number, timeout: number, callback: (val: boolean) => void): any
}

const GlitchText = ({
    children
}: IProps) => {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)

    const glitch: IGlitch = (_interval, _timeout, _callback) => {
        return setInterval(() => {
            _callback(true)

            setTimeout(() => {
                _callback(false)
            }, _timeout)
        }, _interval)
    }

    useEffect(() => {
        const intervals = [
            glitch(1000, 100,  setToggle),
            glitch(1500, 50,  setToggle1),
            glitch(3000, 200,  setToggle2),
            glitch(3000, 200,  setToggle3),
        ]

        return () => {
            for (const interval of intervals) {
                clearInterval(interval)
            }
        }
    }, [])

    return (<>
        <div>
            {toggle && <span className={cn(styles.GlitchText__1)}>{children}</span>}
            {toggle1 && <span className={cn(styles.GlitchText__2)}>{children}</span>}
            <span className={cn({[styles.GlitchText__3]: toggle2})}>{children}</span>
            {toggle3 && <span className={cn(styles.GlitchText__4)}>{children}</span>}
        </div>
    </>)
}

export default GlitchText