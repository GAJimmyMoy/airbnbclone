import React from 'react'
//es7 snippets to do rfce
import Banner from './Banner';
import Card from './Card';
import './Home.css'
function Home() {
  return (
    <div className="home">
      <Banner/>
      <div className="home_section">
        <Card
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          title="Entire homes"
          description="Comfortable private paces, with room for firends or family."
        />
        <Card src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          title="Entire homes"
          description="Comfortable private paces, with room for firends or family."/>
        <Card src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          title="Entire homes"
          description="Comfortable private paces, with room for firends or family."/>
      </div>
      <div className="home_section">
      <Card src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          title="Entire homes"
          description="Comfortable private paces, with room for firends or family."/>
        <Card src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          title="Entire homes"
          description="Comfortable private paces, with room for firends or family."/>
        <Card src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          title="Entire homes"
          description="Comfortable private paces, with room for firends or family."/>
      </div>
    </div>
  )
}

export default Home

