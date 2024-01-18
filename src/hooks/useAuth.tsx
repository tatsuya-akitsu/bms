import { auth } from "@/api/firebase";
import { useUserState } from "@/store/user";
import { UserState } from "@/types";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const useAuth = () => {
  const [user, setUser] = useRecoilState<UserState>(useUserState)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user?.uid,
          email: user?.email,
          displayName: user?.displayName
        })
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [setUser])

  return { user, loading }
}

export default useAuth
