'use client'

import { useState, useEffect } from 'react'

export default function CitySearchInput() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)

  // Replace this with your actual RapidAPI key
  const API_KEY = '283b6bb029msh3b237aee6179790p1a1d98jsnf54ead43e3c1'

  // Fetch cities from API whenever query changes
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([])
      return
    }

    const fetchCities = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=${query}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
          }
        )

        const data = await res.json()
        setSuggestions(data.data.map(city => `${city.city}, ${city.countryCode}`))
      } catch (err) {
        console.error('Failed to fetch cities:', err)
        setSuggestions([])
      }
      setLoading(false)
    }

    // Debounce a bit
    const timeout = setTimeout(fetchCities, 300)

    return () => clearTimeout(timeout)
  }, [query])

  const handleSelect = (city) => {
    setQuery(city)
    setSuggestions([])
  }

  return (
    <div className="relative max-w-md mx-auto mt-10">
      <input
        type="text"
        placeholder="Enter zip code, city, LG, state"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-black w-[400px] h-[60px] px-6 py-2 border-1  bg-white border-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[12px] font-medium"
      />

      {loading && <p className="mt-1 text-sm text-black">Loading...</p>}

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-black rounded-lg mt-1 max-h-60 overflow-auto shadow-lg text-black">
          {suggestions.map((city, i) => (
            <li
              key={i}
              onClick={() => handleSelect(city)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
