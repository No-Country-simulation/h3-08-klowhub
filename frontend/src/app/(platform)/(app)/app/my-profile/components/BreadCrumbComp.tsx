import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BreadcrumbItemIface {
  url: string,
  text: string
}

function BreadCrumbComp({list}:{list:BreadcrumbItemIface[]}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {list.map((item:any,index:number) => (
          (index == list.length-1 ?
              <div className='flex flex-row gap-3' key={index}>
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className='text-white'>{item.text}</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-white'> / </BreadcrumbSeparator>
              </div>
            :
              <div className='flex flex-row gap-3' key={index}>
                <BreadcrumbItem >
                  <BreadcrumbLink href={item.url} className='text-white hover:text-primary-b-300'>{item.text}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-white'> / </BreadcrumbSeparator>
              </div>
          )
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbComp