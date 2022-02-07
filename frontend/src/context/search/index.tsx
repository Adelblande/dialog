import React, { FC, createContext, useState} from 'react'

type SearchType = {
  search: string
}

type PropsSearchContext = {
  state: SearchType,
  setState: React.Dispatch<React.SetStateAction<SearchType>>
}

const DEFAULT_VALUE = {
  state: {
    search: ''
  },
  setState: () => {}
}

const SearchContext = createContext<PropsSearchContext>(DEFAULT_VALUE)

const SearchContextProvider: FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <SearchContext.Provider value={{state, setState}}>
      {children}
    </SearchContext.Provider>
  )

}

export {SearchContextProvider}
export default SearchContext
