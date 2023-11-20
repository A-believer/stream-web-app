import Banner from '@/components/body/banner'
import Campaigns from '@/components/body/campaigns'
import DownloadApp from '@/components/body/download-app'
import Faqs from '@/components/body/faqs'
import Hero from '@/components/body/hero'
import Metric from '@/components/body/metric'
import People from '@/components/body/people'
import SeekingHelp from '@/components/body/seeking-help'
import Testimonials from '@/components/body/testimonials'
import WaystoHelp from '@/components/body/ways-to-help'

export default function Home() {
  return (
    <main className="font-ppn overflow-hidden">
      <Hero />
      <Metric />
      <SeekingHelp />
      <People />
      <DownloadApp />
      <Banner />
      <Campaigns />
      <WaystoHelp />
      <Testimonials />
      <Faqs/>
    </main>
  )
}
