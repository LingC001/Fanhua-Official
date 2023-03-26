import { NextPage } from 'next'
import style from './index.module.scss'
const Navbar: NextPage = () => {
  const tabs = [
    {
      name: '网站首页',
    },
    {
      name: '公司介绍',
    },
    {
      name: '公司产品',
    },
    {
      name: '联系我们',
    },
  ]
  return (
    <div className={style.navbar}>
      <div className={style.logo}></div>
      <div className={style.tabs}>
        {tabs.map((i) => (
          <span key={i.name} className={style.tab}>
            {i.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar
