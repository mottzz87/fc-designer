const label = '分组布局';
const name = 'group';

export default {
    icon: 'icon-cascader',
    label,
    name,
    dragBtn: true,
    mask: false,
    rule() {
        return {
            type: 'el-card',
            props: {header: '新分组'},
            children: []
        };
    },
    children: 'row',
    props() {
        return [
            {type: 'inputNumber', field: 'gutter', title: '栅格间隔'}, 
            
    ];
    }
};
