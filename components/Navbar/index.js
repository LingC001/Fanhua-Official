import style from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  const tabs = [
    {
      name: '首页',
      route: '/',
    },
    {
      name: '关于我们',
      route: '/introduction',
    },
    {
      name: '产品介绍',
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
    router.push(tabs[index].route)
  }

  // 页面刷新时根据路径设置导航高亮
  // 通过router对象获取当前路径
  const { pathname } = router
  // 通过路径获取当前导航索引
  const activeIndexByPath = tabs.findIndex((i) => i.route === pathname)
  // 如果当前导航索引不为-1，且与activeIndex不同，则设置activeIndex
  if (activeIndexByPath !== -1 && activeIndexByPath !== activeIndex) {
    setActive(activeIndexByPath)
  }

  return (
    <div className={style.navbar}>
      <Image
        src="/images/icon/logo.png"
        alt="logo"
        height={'30'}
        width={'160'}
      />
      <div className={style.tabs}>
        {tabs.map((i, idx) => (
          <span
            key={i.name}
            className={tabClass(idx)}
            onClick={() => tabClick(idx)}
          >
            {i.name}
          </span>
        ))}
      </div>
      <div className={style['contact-box']}>
        <Image
          className={style.phone}
          src={'/images/icon/phone.png'}
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
