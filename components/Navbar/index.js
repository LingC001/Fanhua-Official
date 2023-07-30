import style from './index.module.scss'
import Image from 'next/image'
import { useState } from 'react'
const Navbar = () => {
  const tabs = ['首页', '公司介绍', '公司产品', '联系我们']

  const [activeIndex, setActive] = useState(0)

  const tabClass = (index) => {
    return activeIndex === index
      ? `${style.tab} ${style.active}`
      : `${style.tab}`
  }

  const tabClick = (index) => {
    setActive(index)
  }

  return (
    <div className={style.navbar}>
      <Image src="/images/logo.png" alt="logo" height={'30'} width={'160'} />
      <div className={style.tabs}>
        {tabs.map((i, idx) => (
          <span
            key={i}
            className={tabClass(idx)}
            onClick={() => tabClick(idx)}
          >
            {i}
          </span>
        ))}
      </div>
      <div className={style['contact-box']}>
        <Image className={style.phone} src={'/images/phone.png'} alt={'联系电话'} width={'20'} height={'20'}/>
        <span>15972390611</span>
      </div>
    </div>
  )
}

export default Navbar
