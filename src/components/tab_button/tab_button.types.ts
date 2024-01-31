import { Tab } from '../../constants'

export interface TabButtonProps {
  name: string
  activeTab: Tab
  onPress: () => void
}
