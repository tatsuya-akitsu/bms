import { UserState } from '@/types'
import { atom } from 'recoil'

export const useUserState = atom<UserState>({
  key: 'useUserState',
  default: {
    uid: '',
    email: '',
    password: '',
    displayName: ''
  }
})
