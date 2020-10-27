import { InputBase, Select, MenuItem } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { capitalizeText } from '../../../utils/helpers';
import { useStore } from '../../../store';
import { StyledContainer } from './style';

const entities = {
  CTERS: 'characters',
  EDES: 'episodes',
  LTIONS: 'locations',
}

const SearchBox = () => {
  const {setSearchParams} = useStore();
  const [selectedEntity, setSelectedEntity] = useState(entities.CTERS);
  const [keyWord, setKeyWord] = useState('');

  useEffect(() => {
    setSearchParams({
      entity: entities.CTERS,
    });
  }, []);

  const handleOnSelect = (e) =>
    setSelectedEntity(e.target.value);

  const handleOnChange = (e) =>
    setKeyWord(e.target.value);


  const handleOnSubmit = (e) => {
    if (e.key === 'Enter') {
      setSearchParams({
        entity: selectedEntity,
        key: keyWord,
      });
      e.preventDefault();
    }
  };

  return (
    <StyledContainer>
      <Select
        className="select-input"
        onChange={handleOnSelect}
        defaultValue={selectedEntity}
      >
        {Object.values(entities).map((type) => (
          <MenuItem key={type} value={type}>{capitalizeText(type)}</MenuItem>
        ))}
      </Select>
      <InputBase className="text-input" placeholder="Type to search..." onChange={handleOnChange} onKeyPress={handleOnSubmit} />
    </StyledContainer>
  )
};

export { SearchBox };
