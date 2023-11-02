import style from '@/pages/styles/contact.module.scss'
import { useState } from 'react'
import BaiduMap from '@/pages/components/BaiduMap/BaiduMap'

const Contact = () => {
  const [isShowMap, setIsShowMap] = useState(false)

  return (
    <div className={style.contact}>
      <div className="section-row">
        <div className="title">联系人：杨涛</div>
        <div className="title">联系电话：15972390611</div>
        <div className="title" style={{ marginBottom: '24px' }}>
          通讯地址：湖北省咸宁市嘉鱼县陆溪镇界石村
        </div>
        <BaiduMap />
      </div>
    </div>
  )
}

export default Contact
