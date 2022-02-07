import { FC, InputHTMLAttributes, ComponentType } from "react";
import { IconBaseProps } from "react-icons/lib";

import { Container } from "./styles";

interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  icon: ComponentType<IconBaseProps>;
  handleChange: (value: string) => void;
}

const Search: FC<ISearchProps> = ({ icon: Icon, handleChange, ...rest }) => {
  return (
    <Container>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => handleChange(e.target.value)}
        {...rest}
      />
      <Icon size={30} />
    </Container>
  );
};

export default Search;
