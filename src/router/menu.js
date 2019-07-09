export default [
    {
        'title': '控制台',
        'name': 'dashboard',
        'children': [],
        'key': '1'
    },
    {
        'title': '智慧油联',
        'name': 'smartunion',
        'key': '2',
        'children': [
            {
                'title': '业务中心',
                'name': 'businesscenter',
                'path': '',
                'key': '2-1',
                'children': [
                    {
                        'title': '交费列表',
                        'name': 'chargeList',
                        'path': '/admin/youlian/chargelist',
                        'key': '2-1-1',
                    },
                    {
                        'title': '提现记录',
                        'name': 'drawingapplylist',
                        'path': '/admin/youlian/drawingapplylist',
                        'key': '2-1-2',
                    }
                ]
            },
            {
                'title': '分析系统',
                'name': 'analysissystem',
                'path': '',
                'key': '2-2',
                'children': [
                    {
                        'title': '油豆分析',
                        'name': 'oilbeananalysis',
                        'path': '/admin/oilbeananalysis',
                        'key': '2-2-1',
                    }
                ]
            }
        ]
    },
    {
        'title': '油小蜜',
        'name': 'youxiaomi',
        'key': '3',
        'children': [
            {
                'title': '油小蜜',
                'name': 'youxiaomicenter',
                'path': '',
                'key': '3-1',
                'children': [
                    {
                        'title': '订单列表',
                        'name': 'youxiaomiorder',
                        'path': '/admin/youxiaomi/order',
                        'key': '3-1-1',
                    },
                    {
                        'title': '一元预约',
                        'name': 'oneappointment',
                        'path': '/admin/youxiaomi/oneappointment',
                        'key': '3-1-2',
                    }
                ]
            },
            {
                'title': '净水器',
                'name': 'waterPurifier',
                'path': '',
                'key': '3-2',
                'children': [
                    {
                        'title': '订单列表',
                        'name': 'purifierwaterorder',
                        'path': '/admin/youxiaomi/purifierwater',
                        'key': '3-2-1',
                    },
                    {
                        'title': '报表数据',
                        'name': 'purifierwaterreport',
                        'path': '/admin/youxiaomi/purifierwaterreport',
                        'key': '3-2-2',
                    },
                    {
                        'title': '代理商',
                        'name': 'merchant',
                        'path': '/admin/youxiaomi/merchant',
                        'key': '3-2-3',
                    },
                    {
                        'title': '申请列表',
                        'name': 'applylist',
                        'path': '/admin/youxiaomi/applylist',
                        'key': '3-2-4',
                    }
                ]
            },
            {
                'title': '基础设置',
                'name': 'youxiaomisettings',
                'path': '',
                'key': '3-3',
                'children': [
                    {
                        'title': '商品列表',
                        'name': 'productlist',
                        'path': '/admin/youxiaomi/productlist',
                        'key': '3-3-1',
                    },
                    {
                        'title': '特权列表',
                        'name': 'privilege',
                        'path': '/admin/youxiaomi/privilege',
                        'key': '3-3-2',
                    },
                    {
                        'title': '油小蜜用户',
                        'name': 'youxiaomiuser',
                        'path': '/admin/youxiaomi/userlist',
                        'key': '3-3-3',
                    }
                ]
            }
        ]
    },
    {
        'title': '商品',
        'name': 'product',
        'key': '4',
        'children': [
            {
                'title': '商品管理',
                'name': 'commoditymanagement',
                'path': '',
                'key': '4-1',
                'children': [
                    {
                        'title': '商品列表',
                        'name': 'productlist',
                        'path': '/admin/product/productlist',
                        'key': '4-1-1',
                    },
                    {
                        'title': '商品分类',
                        'name': 'productcategory',
                        'path': '/admin/product/productcategory',
                        'key': '4-1-2',
                    }
                ]
            }
        ]
    },
    {
        'title': '订单',
        'name': 'order',
        'key': '5',
        'children': [
            {
                'title': '油联订单',
                'name': 'youlianorder',
                'path': '',
                'key': '5-1',
                'children': [
                    {
                        'title': '订单列表',
                        'name': 'youlianorderlist',
                        'path': '/admin/order/orderlist',
                        'key': '5-1-1',
                    },
                    {
                        'title': '退款列表',
                        'name': 'refund',
                        'path': '/admin/order/refund',
                        'key': '5-1-2',
                    }
                ]
            }
        ]
    },
    {
        'title': '客户',
        'name': 'client',
        'key': '6',
        'children': [
            {
                'title': '会员中心',
                'name': 'membercentre',
                'path': '',
                'key': '6-1',
                'children': [
                    {
                        'title': '会员列表',
                        'name': 'userlist',
                        'path': '/admin/client/userlist',
                        'key': '6-1-1',
                    },
                    {
                        'title': '油卡列表',
                        'name': 'oilcardlist',
                        'path': '/admin/client/oilcardlist',
                        'key': '6-1-2',
                    }
                ]
            }
        ]
    },
    {
        'title': '数据报表',
        'name': 'datareport',
        'key': '7',
        'children': [
            {
                'title': '订单报表',
                'name': 'orderreport',
                'path': '',
                'key': '7-1',
                'children': [
                    {
                        'title': '订单总数',
                        'name': 'orderqtyanalysis',
                        'path': '/admin/data/orderqtyanalysis',
                        'key': '7-1-1',
                    },
                    {
                        'title': '订单金额',
                        'name': 'orderamountanalysis',
                        'path': '/admin/data/orderamountanalysis',
                        'key': '7-1-2',
                    },
                    {
                        'title': '充值总额',
                        'name': 'rechargeamountanalysis',
                        'path': '/admin/data/rechargeamountanalysis',
                        'key': '7-1-3',
                    }
                ]
            },
            {
                'title': '会员报表',
                'name': 'userreport',
                'path': '',
                'key': '7-2',
                'children': [
                    {
                        'title': '分公司',
                        'name': 'barnchreport',
                        'path': '/admin/data/barnchreport',
                        'key': '7-2-1',
                    },
                    {
                        'title': '全国会员分布图',
                        'name': 'userregionreport',
                        'path': '/admin/data/userregionreport',
                        'key': '7-2-2',
                    },
                    {
                        'title': '分公司销售',
                        'name': 'branchsale',
                        'path': '/admin/data/branchsale',
                        'key': '7-2-3',
                    },
                    {
                        'title': '销售排行榜',
                        'name': 'salerank',
                        'path': '/admin/data/salerank',
                        'key': '7-2-4',
                    },
                    {
                        'title': '会员收益排行榜',
                        'name': 'memberincomerank',
                        'path': '/admin/data/memberincomerank',
                        'key': '7-2-5',
                    }
                ]
            }
        ]
    },
    {
        'title': '设置',
        'name': 'settings',
        'key': '8',
        'children': [
            {
                'title': '消息中心',
                'name': 'messagecenter',
                'path': '',
                'key': '8-1',
                'children': [
                    {
                        'title': '消息推送',
                        'name': 'messagepush',
                        'path': '/admin/setting/messagepush',
                        'key': '8-1-1',
                    },
                    {
                        'title': '商学院文章',
                        'name': 'businesscollege',
                        'path': '/admin/setting/businesscollege',
                        'key': '8-1-2',
                    }
                ]
            }
        ]
    },
]