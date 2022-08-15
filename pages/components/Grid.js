import styles from './Grid.module.css'
import Image from 'next/image'

function Grid (){
    return(
        <div className={styles.container}>
<div className={styles.box1}>
    <Image src= '/gray.png' width={'100%'} height={'55%'} layout='responsive' objectFit='contain'></Image>
    
    </div>
<div className={styles.box2}><Image src= '/gray.png' width={'100%'} height={'55%'} layout='responsive' objectFit='contain'></Image></div>
<div className={styles.box3}><Image src= '/gray.png'  width={'100%'} height={'55%'} layout='responsive' objectFit='contain'></Image></div>
<div className={styles.box4}><Image src= '/gray.png'  width={'100%'} height={'55%'} layout='responsive' objectFit='contain'></Image></div>
<div className={styles.box5}><Image src= '/gray.png'  width={'100%'} height={'55%'} layout='responsive' objectFit='contain'></Image></div>
        </div>
    )
}

export default Grid