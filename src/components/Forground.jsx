import React, { useRef } from 'react'
import Card from './Card.jsx';

const Forground = () => {
  const constraintsRef = useRef(null);
  
  const data = [
    {
      desc: "building digital card/product pages, go with pinned footer",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpen: true,
        TagTitle: "Download Now",
        tagColor: "yellow"
      },
    },
    {
      desc: "clear info / blog-style explanation about this issue",
      filesize: ".20mb",
      close: true,
      tag: {
        isOpen: true,
        TagTitle: "Upload",
        tagColor: "gray-300"
      },
    },
    {
      desc: "absolute Removes Element from Normal Flow",
      filesize: ".2mb",
      close: true,
      tag: {
        isOpen: false,
        TagTitle: "Download Now",
        tagColor: "green"
      },
    },

    {
      desc: "Keep Footer Absolute (Pinned) Use relative on parent, absolute bottom-4 on footer.",
      filesize: ".14mb",
      close: false,
      tag: {
        isOpen: true,
        TagTitle: "Upload",
        tagColor: "green"
      },
    },
    {
      desc: "If you want the footer to appear after content and respond to mt-4, don’t use absolute.",
      filesize: ".5mb",
      close: false,
      tag: {
        isOpen: false,
        TagTitle: "Download Now",
        tagColor: "green"
      },
    },
    {
      desc: "Keep Footer Absolute (Pinned) Use relative on parent, absolute bottom-4 on footer.",
      filesize: ".14mb",
      close: false,
      tag: {
        isOpen: true,
        TagTitle: "Upload",
        tagColor: "green"
      },
    },
    {
      desc: "If you want the footer to appear after content and respond to mt-4, don’t use absolute.",
      filesize: ".5mb",
      close: false,
      tag: {
        isOpen: false,
        TagTitle: "Download Now",
        tagColor: "green"
      },
    },
  ]

  return (
    <div 
    ref={constraintsRef}
    className='fixed top-0 left-0 z-[3] w-full flex h-full p-8 gap-8 flex-wrap'>
      {data.map((item, index) => (
        <Card key={index} data={item}  constraintsRef={constraintsRef}/>
      ))}
    </div>
  )
}

export default Forground
