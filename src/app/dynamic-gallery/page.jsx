import React from 'react'
import DynamicGallery from '../../Components/DynamicGallery'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

export const metadata = {
  title: 'Dynamic Gallery',
}

export default function Page() {
  return (
    <main className="paper bg-cover min-h-screen">
      <section>
        <Navbar />
      </section>

      <section className='pt-8'></section>
      <section className='pt-2'></section>

      <section className="pt-8">
        <DynamicGallery apiPath={'/api/gallery'} />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  )
}
