import { LoadBmap } from '@/util'
import { useEffect } from 'react'

const BaiduMap = () => {
  useEffect(() => {
    LoadBmap().then((BMapGL) => {
      let map = new BMapGL.Map('cont')
      map.enableScrollWheelZoom(true)
      let point = new BMap.Point(113.675934, 29.905305)
      map.centerAndZoom(point, 16)
      var marker = new BMapGL.Marker(point)
      map.addOverlay(marker)
    })
  }, [])
  return (
    <div
      id={'cont'}
      style={{ height: '500px', width: '1000px', margin: '0 auto' }}
    ></div>
  )
}

export default BaiduMap
