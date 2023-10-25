import style from '@/pages/styles/products.module.scss'
const Home = () => {
  return (
    <div className={style.products}>
       <div className="product-item">
         <div className="pic"></div>
          <div className="desc">
            <div className="title"></div>
            <div className="text"></div>
          </div>
       </div>
    </div>
  )
}

export default Home
