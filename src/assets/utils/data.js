let path = "http://jy-info.qicp.vip/static/";

let devopsServiceContentOne = [
  {
    desopsImg: path + 'devops/air-condition.png',
    desopsName: '空调系统'
  },
  {
    desopsImg: path + 'devops/generic-cabling.png',
    desopsName: '综合布线系统'
  },
  {
    desopsImg: path + 'devops/security-monitoring.png',
    desopsName: '安防监控系统'
  },
  {
    desopsImg: path + 'devops/multi-media-conference.png',
    desopsName: '多媒体会议系统'
  }
];

let devopsServiceContentTwo = [
  {
    desopsImg: path + 'devops/access-control-attendance.png',
    desopsName: '门禁考勤系统'
  },
  {
    desopsImg: path + 'devops/large-screen-display.png',
    desopsName: '大屏显示'
  },
  {
    desopsImg: path + 'devops/ups.png',
    desopsName: 'UPS系统'
  }
];

export default {
  serviceContentOne: devopsServiceContentOne,
  serviceContentTwo: devopsServiceContentTwo,
}
