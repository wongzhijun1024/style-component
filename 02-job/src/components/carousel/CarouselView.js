import React, { Component } from "react";
import { Carousel, Item, ImgBox, Title, Price } from "./CarouselStyle";

const goods = [
  {
    id: 1,
    url:
      "https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/133003/38/5264/116116/5f1ba3bbE8eed287d/d1546a56f224d88b.jpg.webp",
    type: 1,
    title:
      "瑶妹 泡澡桶 成人洗澡桶折叠浴桶全身大人浴缸沐浴桶加厚保温 丛林火烈鸟升级金属支架",
    price: 149,
  },
  {
    id: 2,
    url:
      "https://img20.360buyimg.com/jdcms/s300x300_jfs/t2614/196/1108691471/403478/fb591403/57344399N1606dcce.jpg.webp",
    type: 2,
    title: "福特(FORD) 原厂空气滤清器/空气滤芯/空滤 空气格 福睿斯14-今 适用",
    price: 83,
  },
  {
    id: 3,
    url:
      "https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/125082/11/5255/96341/5eec8ac9Ef4f1c929/0ad1dd2f3580481d.jpg.webp",
    type: 1,
    title:
      "KARCHER 卡赫无线电动拖把 拖地机 吸尘器伴侣 自动清洁机家用抛光擦地机德国凯驰集团FC3豪华版",
    price: 2299,
  },
  {
    id: 4,
    url:
      "https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/30695/22/15776/181171/5cc32ac8Ee9868257/40ac5b648af78915.jpg.webp",
    type: 0,
    title:
      "新中式壁灯 床头灯卧室客厅过道走廊墙壁灯 复古创意楼梯庭院灯具 A款 5W",
    price: 439,
  },
  {
    id: 5,
    url:
      "https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/37696/35/8163/362810/5cd8cd33Ebbe45055/d4b5334858189c44.jpg.webp",
    type: 0,
    title:
      "扇子折扇女古风千里江山图中式古典布艺丝绸扇子中国特色礼品送老外 千里江山图扇子",
    price: 85,
  },
];
class CarouselView extends Component {
  constructor() {
    super();
    this.getGoogs = this.getGoogs.bind(this);
  }

  getGoogs() {
    return goods.map((good) => {
      return (
        <Item key={good.id}>
          <ImgBox url={good.url} />
          <Title type={good.type}>
            <span>
              {good.type === 0 ? "" : good.type === 1 ? "自营" : "精选"}
            </span>
            {good.title}
          </Title>
          <Price>￥{good.price}</Price>
        </Item>
      );
    });
  }

  render() {
    return <Carousel>{this.getGoogs()}</Carousel>;
  }
}

export default CarouselView;
