import styles from './applicationFlex.module.css'
import Image from 'next/image'

function Applicationflex(){
    return(
        <div className={styles.body}>
            <div className={styles.container}>
<div className={styles.box}><Image src= '/gray.png' width={'100%'} height={'55%'} ></Image></div>
<div className={styles.box}><Image src= '/gray.png' width={'100%'} height={'55%'} ></Image></div>
<div className={styles.box}><Image src= '/gray.png' width={'100%'} height={'55%'} ></Image></div>
<div className={styles.box}><Image src= '/gray.png' width={'100%'} height={'55%'} ></Image></div>
<div className={styles.box}><Image src= '/gray.png' width={'100%'} height={'55%'} ></Image></div>
<div className={styles.box}><Image src= '/gray.png' width={'100%'} height={'55%'} ></Image></div>

            </div>
        </div>
    )
}

export default Applicationflex