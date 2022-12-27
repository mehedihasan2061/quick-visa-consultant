import { useEffect } from "react"

const UseTitle = title=>{
    useEffect(()=>{
document.title = `${title} - Quick Visa Consultancy
`
    },[title])
}

export default UseTitle