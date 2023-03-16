import {style} from "./Clock.style"
import {nowToHHMM} from '../../services/date-service.js'
import { Txt } from "../Txt/Txt"
import { useEffect, useState } from "react"

export function Clock(){
    const [time, setTime] = useState(nowToHHMM())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(nowToHHMM())
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    return(
        <>
        <Txt style={style.time}>
            {time}
        </Txt>
        </>
    )
}