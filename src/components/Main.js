require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数，给图片添加url信息
imageDatas = (function genImageUrl(imageDatasArr) {
  for (var i = 0, len = imageDatasArr.length; i < len; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
  }
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
