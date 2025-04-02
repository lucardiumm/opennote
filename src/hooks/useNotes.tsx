import { useEffect, useState } from 'react'
import { UserType } from '@/types/include'

export function useUser() {
    const [data, setData] = useState<UserType>()

    const Start = async () => {
        
    }

    useEffect(() => {
        Start()
    }, [Start])
    
    return data
}