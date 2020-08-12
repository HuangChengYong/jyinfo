let path = "http://jy-info.qicp.vip/static/devops/";

/* 服务内容第一行数据 */
let weakServiceContentOne = [
  {
    weakImg: path + 'air-condition.png',
    weakName: '空调系统'
  },
  {
    weakImg: path + 'generic-cabling.png',
    weakName: '综合布线系统'
  },
  {
    weakImg: path + 'security-monitoring.png',
    weakName: '安防监控系统'
  },
  {
    weakImg: path + 'multi-media-conference.png',
    weakName: '多媒体会议系统'
  }
];

/* 服务内容第二行数据 */
let weakServiceContentTwo = [
  {
    weakImg: path + 'access-control-attendance.png',
    weakName: '门禁考勤系统'
  },
  {
    weakImg: path + 'large-screen-display.png',
    weakName: '大屏显示'
  },
  {
    weakImg: path + 'ups.png',
    weakName: 'UPS系统'
  }
];


export default {
  weakServiceContentOne: weakServiceContentOne,
  weakServiceContentTwo: weakServiceContentTwo
}
