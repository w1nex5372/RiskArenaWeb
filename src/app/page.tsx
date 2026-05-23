import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DemoStatus from '@/components/DemoStatus'
import EarlyDev from '@/components/EarlyDev'
import GameModes from '@/components/GameModes'
import Classes from '@/components/Classes'
import Loot from '@/components/Loot'
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
      <EarlyDev />
      <GameModes />
      <Classes />
      <Loot />
      <Rewards />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </main>
  )
}
