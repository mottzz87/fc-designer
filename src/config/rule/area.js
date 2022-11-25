const label = '栅格布局';
const name = 'row';

export default {
    icon: 'icon-row',
    label,
    name,
    mask: false,
    rule() {
        return {
            type: 'FcRow',
            props: {},
            children: []
        };
    },
    children: 'col',
    props() {
        return [
            {type: 'inputNumber', field: 'gutter', title: '栅格间隔'}, 
            
    ];
    }
};
