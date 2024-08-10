import { View } from '@tarojs/components'

import { Cell ,Form,
  Button,
  Input,
  TextArea,
  Radio,
  Checkbox,
  Picker,
  DatePicker
} from "@nutui/nutui-react-taro"

import { User ,ArrowRight} from '@nutui/icons-react-taro'

const pickerOptions = [
  { value: 4, text: 'BeiJing' },
  { value: 1, text: 'NanJing' },
  { value: 2, text: 'WuXi' },
  { value: 8, text: 'DaQing' },
  { value: 9, text: 'SuiHua' },
  { value: 10, text: 'WeiFang' },
  { value: 12, text: 'ShiJiaZhuang' },
]


export default function Follow(){

  return <View className="bases">

    <Form
     labelPosition="left"
    >

    <Form.Item
       label="Picker"
       name="picker"
       trigger="onConfirm"
       getValueFromEvent={(...args) => args[1]}
       onClick={(event, ref: any) => {

         console.log(ref)
         ref.open()
       }}
        
        >
      <Picker options={[pickerOptions]}>
            {(value: any) => {
              console.log('ddd',value)
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '0',
                  }}
                  className="nutui-cell--clickable"
                  title={
                    value.length
                      ? pickerOptions.filter((po) => po.value === value[0])[0]
                          ?.text
                      : 'Please select'
                  }
                  extra={<ArrowRight />}
                  align="center"
                >
                </Cell>
              )
            }}
          </Picker>
    </Form.Item>


    <Form.Item
          required
          label="姓名"
          name="username"
          rules={[
            { max: 5, message: '姓名不能超过5个字' },
            { required: true, message: '请输入字段姓名' },
          ]}
          initialValue={''}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入字段姓名"
            type="text"  
          />
        </Form.Item>

    </Form>

  

  </View>
}