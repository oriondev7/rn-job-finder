import { FC } from 'react'
import { COLORS } from '../../constants'
import { TabButtonProps } from './tab_button.types'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './tab_button.styles'

export const TabButton: FC<TabButtonProps> = ({ name, activeTab, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: name === activeTab ? COLORS.primary : '#F3F4F8',
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.btnText,
          {
            color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
          },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}
