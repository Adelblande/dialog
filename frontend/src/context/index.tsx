import {FC} from "react";

import {SearchContextProvider} from './search'

const GlobalContext: FC = ({children}) => {
  return <SearchContextProvider>{children}</SearchContextProvider>
}

export default GlobalContext
