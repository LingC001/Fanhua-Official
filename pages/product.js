import style from '@/pages/styles/products.module.scss'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={style.products}>
      <div className="section-row">
        <div className="product-item">
          <Image
            src={'/images/product/strawberry-2.jpeg'}
            alt={'base'}
            width={0}
            height={0}
            sizes={'100vw'}
            className="image"
          />
          <div className="desc">
            <div className="title">草莓</div>
            <div className="text">
              草莓中含有丰富的膳食纤维，可促进胃肠道的蠕动，促进胃肠道内的食物消化，以改善便秘。
              草莓中的抗氧化成分可以帮助改善肤色、淡化皱纹，有美容护肤的功效。
              草莓中有丰富的胡萝卜素与维生素A，可帮助缓解夜盲症，具有护眼明目之效。
            </div>
          </div>
        </div>
        <div className="product-item">
          <Image
            src={'/images/product/asparagus-2.jpg'}
            alt={'base'}
            width={0}
            height={0}
            sizes={'100vw'}
            className="image"
          />
          <div className="desc">
            <div className="title">芦笋</div>
            <div className="text">
              芦笋中含有丰富的硒元素，可阻止癌细胞的分裂与生长，甚至可使癌细胞逆转。常吃芦笋有助于控制癌细胞生长。
              因芦笋属于低脂肪、低热量的食物，再加上芦笋含有丰富的膳食纤维，常吃芦笋可起到减脂、排脂、降脂的作用。
            </div>
          </div>
        </div>
        <div className="product-item">
          <Image
            src={'/images/product/seedling-2.jpg'}
            alt={'base'}
            width={0}
            height={0}
            sizes={'100vw'}
            className="image"
          />
          <div className="desc">
            <div className="title">草莓苗</div>
            <div className="text">
              本公司每年春秋有草莓种苗供应，2022年从湖北农科院和江苏绿隆脱毒实验室（京东合作方）引进的脱毒原原种苗繁育，
              2023年春季供应品种有大叶红颜原种一代种；隋珠（香野）一代种，天仙醉（又名秒三，久香，贵妃，假章姬，假红颜）一代种，大叶宁玉一代种，粉玉一号二代种，
              天使8（雪兔）二代种，圣诞红一代种，甘露一代种。（按照脱毒原原种-原种-一代种育苗繁育体系）都是24孔滴灌穴盘基质苗，全程避雨繁育，全程控温繁育。
              杜绝炭疽病和断头病。本公司郑重承诺：因质量问题造成的死苗，免费补发。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
