
import { Cell ,Form,
  Button,
  Input,
  TextArea,
  DatePicker, type PickerOption
} from "@nutui/nutui-react-taro"
import { useState } from "react"

import { User ,ArrowRight} from '@nutui/icons-react-taro'

export default function MyDate(props:{dateTime:any;onchange:any}){

  const { dateTime, onchange } = props;

  const [show1, setShow1] = useState(false)


  return (
    <>
      <Cell style={{marginTop:"-10px"}}
        align="flex-start"
        title={dateTime}
        onClick={()=>setShow1(true)}
        description={

          <DatePicker
            title="日期选择"
            visible={show1}
            pickerProps={{
              popupProps: { zIndex: 1220 },
            }}
          
            showChinese
            onCancel={() => setShow1(false)}
            onConfirm={(options, values) => {
              setShow1(false)
              onchange({date:values.join('-')})
              
            }}
          />
        }
        extra={<ArrowRight />}
      />
    </>
 
  )

}