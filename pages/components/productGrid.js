import styles from './productGrid.module.css'
import Image from 'next/image'

function Productgrid(){
    return(
        <div className={styles.body}>
<div className={styles.container}>
<div className={styles.box1}>
    <Image src= '/gray.png' width={100} height={100}></Image>
    
    </div>
<div className={styles.box2}><Image src= '/gray.png' width={100} height={100}></Image></div>
<div className={styles.box3}><Image src= '/gray.png'  width={100} height={100}></Image></div>
<div className={styles.box4}><Image src= '/gray.png'  width={100} height={100}></Image></div>
<div className={styles.box5}><Image src= '/gray.png'  width={100} height={100}></Image></div>
<div className={styles.box6}><Image src= '/gray.png'  width={100} height={100}></Image></div>
        </div>
</div>
        
    )
}

export default Productgrid