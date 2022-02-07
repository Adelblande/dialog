import { FC, InputHTMLAttributes, ComponentType, useContext } from "react";
import { IconBaseProps } from "react-icons/lib";
import SearchContext from "../../context/search";

import { Container } from "./styles";


interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  icon: ComponentType<IconBaseProps>;
}

const Search: FC<ISearchProps> = ({ icon: Icon, ...rest }) => {
  const {state, setState} = useContext(SearchContext)

  return (
    <Container>
      <input
        type="search"
        placeholder="Search"
        onBlur={(e) => setState({...state, search: e.target.value })}
        {...rest}
      />
      <Icon size={30} />
    </Container>
  );
};

export default Search;
