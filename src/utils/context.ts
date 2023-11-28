import type { InjectionKey } from 'vue'

export interface UserInfo {
  id: number
  name: string
}

export type Count = number 

export const InjectKeyUser: InjectionKey<UserInfo> = Symbol()
export const InjectKeyCount: InjectionKey<Count> = Symbol()


export const key = Symbol() as InjectionKey<string>
