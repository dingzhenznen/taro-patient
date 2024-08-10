import { Popup, Cell ,Checkbox,Button} from '@nutui/nutui-react-taro'

import { useRef, useState } from 'react'
 function Filter({showRight,setShowRight,handleFilter}){


  const [checkboxgroup1, setCheckboxgroup1] = useState([])

  const [checkboxgroup2, setCheckboxgroup2] = useState([])

  const checkboxgroup1Ref = useRef(null)
  const checkboxgroup2Ref = useRef(null)

  const handleChange = (value: any) => {
 
    setCheckboxgroup1(value)
  }

  const handleChange2 = (value: any) => {
 
    setCheckboxgroup2(value)
  }

  console.log('xuanran')



  return <Popup
    visible={showRight}
    style={{ width: '70%', height: '100%' ,padding:'1% 3%'}}
    position="right"
    onClose={() => {
      setShowRight(false)
    }}
  >
    <Cell>病种</Cell>

        <Checkbox.Group
         defaultValue={checkboxgroup1}
         ref={checkboxgroup1Ref}
          direction="horizontal"
          onChange={(value) => handleChange(value)}
        >
          <Checkbox shape="button" value="1">选项</Checkbox>
          <Checkbox shape="button" value="2">选项</Checkbox>
          <Checkbox shape="button" value="3">选项</Checkbox>
          <Checkbox shape="button" value="4">选项</Checkbox>
        </Checkbox.Group>

        <Cell>性别</Cell>

        <Checkbox.Group
         defaultValue={checkboxgroup1}
         ref={checkboxgroup2Ref}
          direction="horizontal"
          onChange={(value) => handleChange2(value)}
        >
          <Checkbox shape="button" value="nan">男</Checkbox>
          <Checkbox shape="button" value="nv">女</Checkbox>
         
        </Checkbox.Group>

        <div style={{display:"flex",justifyContent:"flex-end"}}>


        <Button style={{margin:8}} type="success" size='small'
         onClick={()=>{
         
          ;(checkboxgroup1Ref.current as any).toggle(false)
          ;(checkboxgroup2Ref.current as any).toggle(false)

          console.log(checkboxgroup1Ref.current)

          console.log(checkboxgroup1)
        }}>重置</Button>
        <Button style={{margin:8}} type="success" size='small'
         onClick={()=>{
          console.log(checkboxgroup1)
          console.log(checkboxgroup2)
          handleFilter({disease:checkboxgroup1,sex:checkboxgroup2})
        }}>确认</Button>

        </div>

        

   
  </Popup>
}

export default Filter;