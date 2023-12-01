import React from 'react'

function SectionVideo() {
  return (
    <section>
    <div className='container-wrapper'>

      <div className=' '>
      <video autoPlay loop muted playsInline className="mx-auto video-bg border border-[#aeaeae] ">
          <source src="images/video-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
</section>
  )
}

export default SectionVideo