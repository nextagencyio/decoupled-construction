import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'

export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Ironstone Construction - Building Excellence From Foundation to Finish'
  const description = 'Commercial, residential, and industrial construction services with over 25 years of experience. Get a free estimate today.'
  return {
    title, description,
    keywords: ['Construction', 'General Contractor', 'Commercial Building', 'Residential Construction', 'Renovation'],
    openGraph: { title, description, type: 'website', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function Home() {
  const configStatus = checkConfiguration()
  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()

  try {
    const data = await client.raw(GET_HOMEPAGE_DATA)
    const homepageContent = data?.nodeHomepages?.nodes?.[0] || null

    if (!homepageContent) {
      const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
      return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
    }

    return <HomepageRenderer homepageContent={homepageContent} />
  } catch (error) {
    console.error('Error fetching homepage:', error)
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }
}
