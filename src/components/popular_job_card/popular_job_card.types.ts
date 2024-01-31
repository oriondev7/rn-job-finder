import { Job } from '../../models'

export interface PopularJobCardProps {
  item: Job
  selectedJobId: string
  onPress: () => void
}
