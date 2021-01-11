const dataList = {
  gun: [
    { userName: '110101200001013465', describe: '省级管理', passWord: '013465' },
    { userName: '220702199006070054', describe: '省级单位管理', passWord: '070054' },
    { userName: '610502199803077031', describe: '部门管理', passWord: '077031' },
    { userName: '36010220060307724X', describe: '部门管理 2', passWord: '07724X' },
    { userName: '110101200303071871', describe: '省审批领导', passWord: '071871' },
    { userName: '220702199006070054', describe: '省级警保', passWord: '070054' },
    { userName: '610502199803073495', describe: '广州市单位管理', passWord: '073495' },
    { userName: '110101199006101434', describe: '广州市公安局部门管理', passWord: '101434' },
    { userName: '110101199003070011', describe: '广州市警保', passWord: '070011' },
    { userName: '110101200401070274', describe: '广州市治安部门领导', passWord: '070274' },
    { userName: '341302199003079199', describe: '荔湾分局管理', passWord: '079199' },
    { userName: '11010119900307248X', describe: '荔湾区警保', passWord: '07248X' },
    { userName: '110118199003071230', describe: '荔湾分局枪管员', passWord: '071230' },
    { userName: '610502199803079790', describe: '越秀区单位管理', passWord: '079790' },
    { userName: '12010120010307245X', describe: '越秀分局部门管理', passWord: '07245X' },
    { userName: '620102199003073817', describe: '越秀区警保', passWord: '073817' }
  ],
  gunLocal: [
    { userName: '110101200001013465', describe: '省级管理2', passWord: '013465' },
    { userName: '220702199006070054', describe: '省级单位管理', passWord: '070054' },
    { userName: '610502199803077031', describe: '部门管理', passWord: '077031' },
    { userName: '36010220060307724X', describe: '部门管理 2', passWord: '07724X' },
    { userName: '110101200303071871', describe: '省审批领导', passWord: '071871' },
    { userName: '220702199006070054', describe: '省级警保', passWord: '070054' },
    { userName: '610502199803073495', describe: '广州市单位管理', passWord: '073495' },
    { userName: '110101199006101434', describe: '广州市公安局部门管理', passWord: '101434' },
    { userName: '110101199003070011', describe: '广州市警保', passWord: '070011' },
    { userName: '110101200401070274', describe: '广州市治安部门领导', passWord: '070274' },
    { userName: '341302199003079199', describe: '荔湾分局管理', passWord: '079199' },
    { userName: '11010119900307248X', describe: '荔湾区警保', passWord: '07248X' },
    { userName: '110118199003071230', describe: '荔湾分局枪管员', passWord: '071230' },
    { userName: '610502199803079790', describe: '越秀区单位管理', passWord: '079790' },
    { userName: '12010120010307245X', describe: '越秀分局部门管理', passWord: '07245X' },
    { userName: '620102199003073817', describe: '越秀区警保', passWord: '073817' }
  ]
}

const sysData = [
  {
    id: 'gun',
    href: 'http://gun-admin.d3.yilisafe.com/#/user/login',
    describe: '枪管开发环境'
  },
  {
    id: 'gunLocal',
    href: 'http://localhost:8000/#/user/login',
    describe: '枪管本地开发环境'
  }
]

export { dataList, sysData }
