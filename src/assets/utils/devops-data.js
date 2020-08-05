let path = "http://jy-info.qicp.vip/static/devops/";

/* 服务内容第一行数据 */
let devopsServiceContentOne = [
  {
    desopsImg: path + 'air-condition.png',
    desopsName: '空调系统'
  },
  {
    desopsImg: path + 'generic-cabling.png',
    desopsName: '综合布线系统'
  },
  {
    desopsImg: path + 'security-monitoring.png',
    desopsName: '安防监控系统'
  },
  {
    desopsImg: path + 'multi-media-conference.png',
    desopsName: '多媒体会议系统'
  }
];

/* 服务内容第二行数据 */
let devopsServiceContentTwo = [
  {
    desopsImg: path + 'access-control-attendance.png',
    desopsName: '门禁考勤系统'
  },
  {
    desopsImg: path + 'large-screen-display.png',
    desopsName: '大屏显示'
  },
  {
    desopsImg: path + 'ups.png',
    desopsName: 'UPS系统'
  }
];

/* 全方位运维方案数据 */
let allRoundList = [
  {
    image: path + 'monitoring_system.png',
    title: '监控系统',
    content: [
      '监控主机检测',
      '监控清洁保养',
      '监控数据整理'
    ]
  },
  {
    image: path + 'air-conditioner-system.png',
    title: '空调系统',
    content: [
      '滤网、加湿罐定期更换',
      '运行情况监测',
      '定期清洁保养'
    ]
  },
  {
    image: path + 'large-screen-display-system.png',
    title: '大屏显示系统',
    content: [
      '显示屏点亮检测',
      '各种输入信号测试',
      '大屏外观清洁保养'
    ]
  },
  {
    image: path + 'ups-system.png',
    title: 'UPS系统',
    content: [
      '主机清洁保养',
      '电池检测',
      '运行检测'
    ]
  },
  {
    image: path + 'cabling-system.png',
    title: '综合布线系统',
    content: [
      '点位抽样检测',
      '机房线缆整理',
      '点位标签检查',
      '图纸及时更新'
    ]
  },
  {
    image: path + 'access-control-attendance-system.png',
    title: '门禁考勤系统',
    content: [
      '门禁系统检测',
      '考勤系统检测',
      '数据整理',
      '链路检测'
    ]
  },
  {
    image: path + 'conference-system.png',
    title: '会议系统',
    content: [
      '会议系统各设备运行检测',
      '投影机检测',
      '视频会议设备检测',
      '会议话筒检测',
      '互动屏检测'
    ]
  },
  {
    image: path + 'meeting-guarantee-system.png',
    title: '会议保障',
    content: [
      '根据会议要求布置所需设备',
      '会前检测各设备',
      '人员全程保障'
    ]
  },
]

export default {
  serviceContentOne: devopsServiceContentOne,
  serviceContentTwo: devopsServiceContentTwo,
  allRoundList: allRoundList,
}
