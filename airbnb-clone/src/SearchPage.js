import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 august to 30
          aug 2 guest
        </p>
        <h1>Stays nearby</h1>
        <Button variant ="outlined">Cancellation Flexibility
        </Button>
        <Button variant ="outlined">Type of place
        </Button>
        <Button variant ="outlined">Price
        </Button>
        <Button variant ="outlined">Rooms and bed
        </Button>
        <Button variant ="outlined">More filters
        </Button>
        <SearchResult
          img="https://res.cloudinary.com/apartmentlist/image/upload/f_auto,q_auto,t_web-base/b92f00c5f959c25884c53efbc072e894.jpg"
          location="primary, center of london"
          title="stay at this spacious Edwardian House"
          description="1 guest - 1bedroom -1.5 shared bathroom- wifi-kitchen -freeparking - washing machine"
          star={4.73}
          price="$30/ night"
          total="$117/total"
        />
          <SearchResult
          img="https://res.cloudinary.com/apartmentlist/image/upload/f_auto,q_auto,t_web-base/b92f00c5f959c25884c53efbc072e894.jpg"
          location="primary, center of london"
          title="stay at this spacious Edwardian House"
          description="1 guest - 1bedroom -1.5 shared bathroom- wifi-kitchen -freeparking - washing machine"
          start={4.73}
          price="$30/ night"
          total="$117/total"
        />
      </div>
    </div>
  )
}

export default SearchPage
