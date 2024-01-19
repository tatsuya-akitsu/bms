import { UserState } from '@/types'
import { atom } from 'recoil'

export const useUserState = atom<UserState | null>({
  key: 'useUserState',
  default: null
})
