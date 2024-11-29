import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface SelectOptIface{
  value:string
  text:string
}
/**
 * SelectContentOptComp
 * @param options List of options to create 
 * @returns SelectContent with the options
 */
function SelectContentOptComp({options}:{options:SelectOptIface[]}) {
  return (
    <SelectContent>
      {options.map((option:SelectOptIface,index:number) =>(
        <SelectItem value={option.value} key={index}>{option.text}</SelectItem>
      ))}
    </SelectContent>
  )
}

export default SelectContentOptComp