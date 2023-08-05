import style from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
  // const tabs = ['首页', '公司介绍', '公司产品', '联系我们']

  const tabs = [
    {
      name: '首页',
      route: '/',
    },
    {
      name: '公司介绍',
      route: '/introduction',
    },
    {
      name: '公司产品',
      route: '/product',
    },
    {
      name: '联系我们',
      route: '/contact',
    },
  ]

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
            key={i.name}
            className={tabClass(idx)}
            onClick={() => tabClick(idx)}
          >
            <Link href={i.route}>{i.name}</Link>
          </span>
        ))}
      </div>
      <div className={style['contact-box']}>
        <Image
          className={style.phone}
          src={'/images/phone.png'}
          alt={'联系电话'}
          width={'20'}
          height={'20'}
        />
        <span>15972390611</span>
      </div>
    </div>
  )
}

export default Navbar
