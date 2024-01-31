import { Image, TouchableOpacity } from 'react-native'
import { Direction, icons } from '../../constants'
import { FC } from 'react'
import { PageButtonProps } from './page_button.types'
import { styles } from './page_button.styles'

export const PageButton: FC<PageButtonProps> = ({ type, onPress }) => {
  return (
    <TouchableOpacity style={styles.paginationButton} onPress={onPress}>
      <Image
        source={
          type === Direction.left ? icons.chevronLeft : icons.chevronRight
        }
        style={styles.paginationImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}
