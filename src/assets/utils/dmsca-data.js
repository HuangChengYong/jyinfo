let path = "//jy-info.qicp.vip/img/dmsca/";

let dmscaFeatureList = [
  {
    featureIcon: path + 'feature_icon_01.png',
    featureName: '操作系统独立',
    featureDetail: '操作系统独立。代码扫描不依赖于特定操作系统，只需在在企业范围内部署一台扫描服务器，就可以扫描其它操作系统开发环境下的代码。'
  },
  {
    featureIcon: path + 'feature_icon_02.png',
    featureName: '编译器独立、开发环境独立，搭建测试环境简单快速且统一',
    featureDetail: '由于采用了独特的虚拟编译器技术，代码扫描不需要依赖编译器和开发环境，无需为每种开发语言的代码安装编译器和测试环境，只需要通过客户端、浏览器、开发环境集成插件登录到we服务器。'
  },
  {
    featureIcon: path + 'feature_icon_03.png',
    featureName: '工具学习、培训和使用的成本少，最小化影响开发进度',
    featureDetail: '由于编译器、操作系统和开发环境独立，使用者无需去学习每种平台下如何去编译代码，调试代码、如何扫描测试代码，无需去看每种平台下繁琐的使用手则。因为端玛代码扫描系统服务只需要提供源代码即可扫描，并给出精确的扫描结果。'
  },
  {
    featureIcon: path + 'feature_icon_04.png',
    featureName: '低误报, DMSCA企业服务在扫描过程中全面分析应用的所有路径和变量',
    featureDetail: '准确地分析结果，验证可能的风险是否真正导致安全问题，自动排除噪音信息，扫描结果几乎就是最终的分析结果，误报率（False Positive）几乎为零。极大的减少了审计分析的人工劳动成本，极大节省了代码审计的时间，为开发团队赢得更多的开发时间。'
  },
  {
    featureIcon: path + 'feature_icon_05.png',
    featureName: '安全漏洞覆盖面广且全面 (低漏报）',
    featureDetail: '数以百计的安全漏洞检查适合任于何组织，支持最新的OWASP 、CWE、SANS、PCI、SOX、GDPR、等国际权威组织对软件安全漏洞的定义，同时支持中国国家源代码安全检测标准（GB/T34944-2017 Java、GB/T34943-2017 C/C++、GB/T34946-2017 C#）。漏洞覆盖面广，安全检查全面，其自定义查询语言可以让用户灵活制定需要的代码规则，极大的丰富组织特定的代码安全和代码质量的需要。'
  },
  {
    featureIcon: path + 'feature_icon_06.png',
    featureName: '安全查询规则清晰且完全公开实现',
    featureDetail: '规则定义清晰，并完全公开所有规则的定义和实现让用户清楚知道工具如何去定义风险、如何去查找风险，透明各种语言风险。让用户知道工具已经做了那些工作，没有做那些该工作。而不是给用户一个黑匣子，用户无法了解工具的细节和缺陷，无法在代码审计过程中规避工具的风险（比如漏报和误报），比如利用人工或者其它手段查找工具不能定位的问题。'
  },
  {
    featureIcon: path + 'feature_icon_07.png',
    featureName: '安全规则自定义简单高效',
    featureDetail: '由于公开了所有规则实现的细节和语法，用户可以快速修改规则或者参考已有的规则语句自定义自己需要规则，规则学习，定义简单高效。能快速实现组织软件安全策略。'
  },
  {
    featureIcon: path + 'feature_icon_08.png',
    featureName: '业务逻辑和架构风险调查',
    featureDetail: '端玛代码扫描系统服务可以对所有扫描代码的任意一个代码元素（词汇）做动态的数据影响、控制影响和业务逻辑研究和调查。分析代码逻辑和架构特有的安全风险，并最后定义规则精确查找这些风险。这是目前唯一能动态分析业务逻辑和软件架构的静态技术。'
  },
  {
    featureIcon: path + 'feature_icon_09.png',
    featureName: '攻击路径的可视化',
    featureDetail: '以3D形式展现。每一个安全漏洞的攻击模式和路径完全呈现出来，以3D图形的方式显示，便于安全问题调查和分析。'
  },
  {
    featureIcon: path + 'feature_icon_10.png',
    featureName: '支持主流语言',
    featureDetail: 'Java、JSP、JavaSript、VBSript、C#、ASP.net、VB.Net、VB6、C/C++、ASP、PHP、Python、Swift、Ruby、Perl、PL/SQL、Android、OWASP ESAPI、MISRA、Objective-C (iOS)、API及第三方语言。'
  },
  {
    featureIcon: path + 'feature_icon_11.png',
    featureName: '支持的主流框架（Framework）',
    featureDetail: 'Struts、Spring、Ibatis、GWT、Hiberante、Enterprise Libraries、 Telerik、ComponentArt、Infragistics、FarPoint、Ibatis.NET、Hibernate.Net [*]、MFC。可针对客户特定框架快速定制支持。'
  },
  {
    featureIcon: path + 'feature_icon_12.png',
    featureName: '服务独立，全面的团队扫描支持',
    featureDetail: '作为服务器运行。开发人员、管理人员和审计人员都可以凭各自的身份凭证从任何一处登录服务器，进行代码扫描、安全审计、团队、用户和扫描任务管理。'
  },
  {
    featureIcon: path + 'feature_icon_13.png',
    featureName: '高度自动化扫描任务',
    featureDetail: '自动集成版本管理（SubVersion、TFS、git、其它）、SMTP邮件服务器和Windows账户管理，实现自动扫描代码更新、自动扫描、自动报警和自动邮件通知等。'
  },
  {
    featureIcon: path + 'feature_icon_14.png',
    featureName: '支持多任务排队扫描、并发扫描、循环扫描、按时间调度扫描，提高团队扫描效率',
    featureDetail: ''
  },
  {
    featureIcon: path + 'feature_icon_15.png',
    featureName: '云服务实现',
    featureDetail: ''
  },
  {
    featureIcon: path + 'feature_icon_16.png',
    featureName: '支持最佳修复建议 ，图形显示最佳修复点',
    featureDetail: ''
  },
  {
    featureIcon: path + 'feature_icon_17.png',
    featureName: '支持客户化平台定制:定规则、定策略、定界面、定报告、定流程、定规范及接口集成',
    featureDetail: ''
  }
]

let productShowList = [
  {
    industry_case_image: '//jy-info.qicp.vip/img/xuzhou_guotaitai.png',
    industry_case_name: '案例一'
  },
  {
    industry_case_image: '//jy-info.qicp.vip/img/xuzhou_guotaitai.png',
    industry_case_name: '徐州国泰太平洋酒店'
  },
  {
    industry_case_image: '//jy-info.qicp.vip/img/xuzhou_guotaitai.png',
    industry_case_name: '案例二'
  },
  {
    industry_case_image: '//jy-info.qicp.vip/img/xuzhou_guotaitai.png',
    industry_case_name: '案例三'
  },
  {
    industry_case_image: '//jy-info.qicp.vip/img/xuzhou_guotaitai.png',
    industry_case_name: '案例四'
  },
];

export default {
  dmscaFeatureList: dmscaFeatureList,
  productShowList: productShowList
}
