'use client'
import { authenticateStateConfirm } from "@/api/firebase"
import { useUserState } from "@/store/user"
import { useEffect } from "react"
import { useRecoilState } from "recoil"

const Dashboard = () => {
  const [user, setUser] = useRecoilState(useUserState)

  useEffect(() => {
    authenticateStateConfirm(setUser)
  }, [])

  return (
    <div>dashboard
    </div>
  )
}

export default Dashboard
