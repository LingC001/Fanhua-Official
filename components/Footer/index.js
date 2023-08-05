import style from './footer.module.scss'
import Image from "next/image";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className={`${style.ftBox} ${style.left}`}>
          <div className={style.title}>联系方式</div>
          <div className={style.item}>联系电话：15972390611</div>
          <div className={style.item}>联系邮箱：1070939301@qq.com</div>
          <div className={style.item}>联系地址：湖北省嘉鱼县陆溪镇界石村二组</div>
        </div>
        <div className={style.ftBox}>
          <Image src="/images/wx.jpg" alt="logo" height={'30'} width={'135'} />
          <div className={style.wx}>官方微信</div>
        </div>
      </div>
      <div className={style.footerBot}>
        Copyright © 2023 梵华莲花(武汉)农业发展有限公司(fanhualianhua.top)版权所有
        备案号：<a href={'https://beian.miit.gov.cn/'} target={'_blank'}>鄂ICP备2023007961号-1</a>
      </div>
    </div>
  )
}

export default Footer
