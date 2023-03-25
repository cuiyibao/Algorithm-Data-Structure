---
title: 列表页
order: 0
---

### 示例
````jsx
import {
  Row,
  Col,
  Button,
  Checkbox,
  Divider,
  Tag,
  Input,
  Select,
  DatePicker,
  TimePicker,
  TreeSelect,
  InputNumber,
  Cascader
} from '@lianjia/antd-life';
import FilterItem from '../../../business/filter-item';
import MultiCascader from '../../../business/multi-cascader/index'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const MySelect = FilterItem(Select);
// const MyMultiCascader = FilterItem(MultiCascader)
const MyDatePicker = FilterItem(DatePicker);

const MyWeekPicker = FilterItem(WeekPicker);
const MyRangePicker = FilterItem(RangePicker);
const MyMonthPicker = FilterItem(MonthPicker);
const MyTimePicker = FilterItem(TimePicker);
const MyInput = FilterItem(Input);
const { Search } = Input;
const MySearch = FilterItem(Search);
const MyTreeSelect = FilterItem(TreeSelect);
// const MySug = FilterItem(Sug)
const MyInputNumber = FilterItem(InputNumber);
const MyCascader = FilterItem(Cascader);
const MyMultiCascader = FilterItem(MultiCascader);
const CheckboxGroup = Checkbox.Group;
const MyCheckboxGroup = FilterItem(CheckboxGroup)
const CheckableTag = Tag.CheckableTag;

const options = [
  {
    code: "BJ_13_1182736",
    desc: "西店一部"
  },
  {
    code: "BJ_12_1143019",
    desc: "南店"
  },
  {
    code: "BJ_12_1143018",
    desc: "北店"
  },
  {
    code: "BJ_12_1143017",
    desc: "东店"
  }
];

const optionsTwo = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

const plainOptions = ['选项一', '选项二', '选项三', '选项四', '选项五', '选项六'];

const tagsFromServer = ['不限', '待分配', '待处理', '跟进中', '待激活', '已设计认购', '已正式签约'];

class Demo extends React.Component {
  state = {
    value: undefined,
    singleSelect: undefined,
    singleValue: undefined,
    mutiSelect: undefined,
    selectedTags: [],
    total: 15,
    currentPage: 1,
    pageSize: 10
  };

  onChange = (type, value) => {
    this.setState({
      [type]: value
    });
  };

  handleChangeTag = (tag, checked) => {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [tag]
      : selectedTags.filter(t => t !== tag);
    this.setState({ selectedTags: nextSelectedTags });
  }

  handdleTableChange = (info) => {
    console.log('info===🚀===>', info)
  }

  render(){
    const { selectedTags, total } = this.state
    return (
      <div className='page-wrp customNewLubanStyle'>
        <section className='filter-container module-wrp'>
          <Row gutter={16}>
            <Col span={6}>
              <MySearch title="标题名称" titleNum={4} placeholder="请输入" style={{ width: 272 }} />
            </Col>
            <Col span={6}>
              <MyTreeSelect
                value={this.state.singleValue}
                allowClear
                style={{ width: 272 }}
                onChange={value => this.onChange("singleValue", value)}
                title="标题名称"
                titleNum={4}
                placeholder="请选择"
              >
                <TreeSelect.TreeNode value="parent 1" title="parent 1" key="0-1">
                  <TreeSelect.TreeNode
                    value="parent 1-0"
                    title="parent 1-0"
                    key="0-1-1"
                  >
                    <TreeSelect.TreeNode value="leaf1" title="my leaf" key="random" />
                    <TreeSelect.TreeNode
                      value="leaf2"
                      title="your leaf"
                      key="random1"
                    />
                  </TreeSelect.TreeNode>
                  <TreeSelect.TreeNode
                    value="parent 1-1"
                    title="parent 1-1"
                    key="random2"
                  >
                    <TreeSelect.TreeNode value="sss" title={"sss"} key="random3" />
                  </TreeSelect.TreeNode>
                </TreeSelect.TreeNode>
              </MyTreeSelect>
            </Col>
            <Col span={6}>
              <MyRangePicker title="日期范围" titleNum={4} placeholder="请输入" />
            </Col>
            <Col span={6}>
              <Button>重置</Button>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <MyCheckboxGroup filterItemType='noBorder' title="筛选标题" titleNum={4} options={plainOptions} defaultValue={['选项一']} onChange={value => this.onChange("checkbox", value)} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <div className='filterHoc filterNoBorder'>
                <div className='filterTitle'>客源状态</div>
                <div className='filterCon4'>
                  {tagsFromServer.map(tag => (
                    <CheckableTag
                      key={tag}
                      checked={selectedTags.indexOf(tag) > -1}
                      onChange={checked => this.handleChangeTag(tag, checked)}
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    )
  }
};

ReactDOM.render(<Demo />, mountNode);
````
