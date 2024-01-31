import { JobHighlights } from './'

export interface Job {
  employer_logo: string
  job_title: string
  job_employment_type: string
  job_id: string
  employer_name: string
  job_country: string
  job_publisher: string
  job_highlights: JobHighlights
  job_description: string
  job_google_link: string
}
