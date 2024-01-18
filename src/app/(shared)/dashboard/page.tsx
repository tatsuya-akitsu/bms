'use client'
import { authenticateStateConfirm } from "@/api/firebase"
import { useUserState } from "@/store/user"
import { useEffect, useRef } from "react"
import { useRecoilState } from "recoil"

const Dashboard = () => {
  const [user, setUser] = useRecoilState(useUserState)
  const isDevFlg = useRef<boolean>(true)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isDevFlg.current) {
      isDevFlg.current = false
      return
    }
    authenticateStateConfirm(setUser)
    console.log('呼ばれてる？', user)
  }, [])

  return (
    <div>dashboard
    </div>
  )
}

export default Dashboard
