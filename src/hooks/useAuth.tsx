'use client'
import { auth } from "@/api/firebase"
import { useUserState } from "@/store/user"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

const useAuth = () => {
  const [user, setUser] = useRecoilState(useUserState)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        setUser({
          uid: newUser.uid,
          email: newUser.email,
          displayName: newUser.displayName
        })
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}

export default useAuth
