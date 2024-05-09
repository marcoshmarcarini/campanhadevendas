import styles from './LogoUnimed.module.css'
import Image from 'next/image'

export default function LogoUnimed() {
    return (
        <div>
            <Image src={`/img/35-anos.png`} width={500} height={500} className={styles.img_35_anos}/>
        </div>
    )
}