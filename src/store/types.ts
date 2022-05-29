import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IdashBoardState } from './main/analysis/types'
export interface IRootState {
  name: string
  age: number
  entireDepartment: []
  entireRole: []
  entireMenu: []
}
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IdashBoardState
}

export type IStoreType = IRootState & IRootWithModule
