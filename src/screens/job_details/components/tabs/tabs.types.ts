import { Tab } from '../../../../constants'

export interface TabsProps {
  tabs: Tab[]
  activeTab: Tab
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>
}
