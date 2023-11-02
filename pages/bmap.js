import {LoadBmap} from "@/util";
import {useEffect} from "react";


const BaiduMap = () => {
  useEffect(() => {
    LoadBmap().then(BMap => {
      let map = new BMap.Map("cont");
      let point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
    })
  }, []);
  return (
    <div id={'cont'} style={{height: '300px'}}>
    </div>
  )
};

export default BaiduMap;
