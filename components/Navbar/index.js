import style from './index.module.scss'
import Image from "next/image";
const Navbar = () => {
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
      <Image src="/images/logo.png" alt="logo" height={'30'} width={'160'}/>
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
