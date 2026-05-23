import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DemoStatus from '@/components/DemoStatus'
import GameModes from '@/components/GameModes'
import Rewards from '@/components/Rewards'
import Roadmap from '@/components/Roadmap'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DemoStatus />
      <GameModes />
      <Rewards />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </main>
  )
}
