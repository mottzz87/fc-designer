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
            {type: 'input', field: 'header', title: '分组标题'} 
        ];
    }
};
