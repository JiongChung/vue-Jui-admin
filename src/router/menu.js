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
                    }
                ]
            },
            {
                'title': '登录',
                'name': 'login',
                'path': '/account/login',
                'key': '2-2',
            },
            {
                'title': '选项4',
                'name': 'tabs4',
                'path': '',
                'key': '2-3',
                'children': [
                    {
                        'title': '测试',
                        'name': 'test',
                        'path': '/admin/test',
                        'key': '2-3-1',
                    }
                ]
            }
        ]
    }
]