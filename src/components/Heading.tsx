import React from 'react'
import styles from './Heading.module.scss'

interface IHeadingProps {
    title: string;
    subTitle?: string;
    emoji: string;
    [x: string]: any;
}

const Heading = ({
    title,
    subTitle,
    emoji,
    ...restProps
}: IHeadingProps) => {
  return (
    <div className={styles.heading}>
        <div className={styles.wrap}>
            <div className={styles.title}>
                <div className={styles.text}>
                    {title}
                </div>
                <div className={styles.emoji}>
                    <img src={emoji} alt="아이콘 이미지" />
                </div>
            </div>
            <div className={styles.desc}>
                {
                    subTitle ? (
                        <div className={styles.text}>
                            <span>
                                {subTitle}
                            </span>
                        </div>
                    ) : ''
                }
            </div>
        </div>
    </div>
  )
}

export default Heading