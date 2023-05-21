import PropTypes from 'prop-types';
import Select from 'react-select';
import { TypeSelectorWrapper } from './FilterSelector.styled';

const options = [
  { value: 'showAll', label: 'show all' },
  { value: 'follow', label: 'follow' },
  { value: 'followings', label: 'followings' },
];

export const FilterSelector = ({ onSelectChange }) => {
  return (
    <TypeSelectorWrapper>
      <label htmlFor="select">Sort by:</label>
      <Select
        onChange={selectedOption => onSelectChange(selectedOption.value)}
        options={options}
        styles={{
          control: baseStyles => ({
            ...baseStyles,
            background: '#ebd8ff',
            width: '200px',
          }),
        }}
      />
    </TypeSelectorWrapper>
  );
};

FilterSelector.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
};
