import React, { useState } from 'react'

const api ={
    key: "d8bcba72ed3c39d4e71fe5acad0348e8",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    const [query,setQuery] = useState('');
    const search = evt => {
        if(evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(res => res.json()).then(result => {
                console.log(result);
            })
        }
    }

  return (
    <div>
      <main>
        <div className='search-bar'>
            <input type='text'
            className='search-box'
            placeholder='Search...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
            />
        </div>
      </main>
    </div>
  )
}

export default Weather
