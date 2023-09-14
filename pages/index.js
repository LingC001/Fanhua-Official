import CarouselBanner from '@/pages/components/CarouselBanner/CarouselBanner'
import style from '@/pages/styles/index.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const Home = () => {
  return (
    <div className={style.index}>
      <CarouselBanner />
      <div className="section-row">
        <div className="title">梵华莲花(武汉)农业发展有限公司</div>
        <div className="subTitle">关于梵华莲花</div>
        <div className="desc">
          梵华莲花（武汉）农业发展有限公司成立于2012年10月15日，注册地位于湖北省咸宁市嘉鱼县陆溪镇界石村三组，法定代表人为刘艳琴。经营范围包括农产品、物联网技术研发；农业技术转让服务、开发服务、咨询、交流服务；农业科技信息推广服务；农业项目、旅游项目开发；有机肥料及微生物肥料、农副产品、农产品、蔬菜、预包装食品、农作物种子销售；农业项目规划、林业规划设计；林业科学研究服务；物联网技术服务；畜牧业科学研究服务；物联网技术咨询；货物及技术进出口；旅游管理服务；物业管理；土地整理、复垦；土壤修复；环保信息咨询；土地规划咨询；谷物、蔬菜种植销售；水产品、畜禽的养殖。（涉及许可经营项目，应取得相关部门许可后方可经营
        </div>
      </div>
      <div className="section-row bg-white">
        <div className="title">我们的产品</div>
        <div className="cont">
          <div className="product-item">
            <div className="item-title">芦笋</div>
            <Image
              src={'/images/product/asparagus-1.jpeg'}
              alt={'base'}
              width={0}
              height={0}
              sizes={'100vw'}
              className="image"
            />
          </div>
          <div className="product-item">
            <div className="item-title">草莓</div>
            <Image
              src={'/images/product/strawberry-1.jpg'}
              alt={'base'}
              width={0}
              height={0}
              sizes={'100vw'}
              className="image"
            />
          </div>
          <div className="product-item">
            <div className="item-title">草莓苗</div>
            <Image
              src={'/images/product/seedling-1.jpg'}
              alt={'base'}
              width={0}
              height={0}
              sizes={'100vw'}
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
