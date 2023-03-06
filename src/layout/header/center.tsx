import React, { useState } from 'react';
import Input from '../../components/atoms/input/input';
import { RuleGroupType } from 'react-querybuilder';
import Button from '../../components/atoms/button/button';
import Icon from '../../components/atoms/icon/icon';
import SearchDropDown from '../../components/molecules/search-dropdown/search-dropdown';
import { useNavigate } from 'react-router-dom';
import t from '../../utils/translation/t';

const Center = () => {
  const navigate = useNavigate();
  const searchAttributes = { attributes: [] };
  const [search, setSearch] = useState('');
  const [dropdownActive, setDropdownActive] = useState(false);

  const lastStateOfRule: RuleGroupType = { combinator: 'and', rules: [] };

  const [queryBuilder, setQueryBuilder] = useState<RuleGroupType>({ rules: [], combinator: '' });
  const clickHandler = () => {
    if (!dropdownActive) {
      setDropdownActive(true);
    } else {
      setDropdownActive(false);
    }
  };

  const handleApplyFilter = () => {
    if (!dropdownActive) {
      setDropdownActive(true);
    } else {
      navigate('search-results');
      setDropdownActive(false);
    }
  };
  const onEnterPress = () => {
    navigate('search-results');
  };

  const clearFilterHandler = () => {
    setSearch('');
    setQueryBuilder(lastStateOfRule);
  };

  return (
    <div className="dtools-header-center">
      <Input
        placeholder={t('header.input.placeholder')}
        value={search}
        data-test-id="global-search-input-test"
        onChange={(e) => setSearch(e.target.value)}
        onPressEnter={onEnterPress}
        suffix={
          <>
            {(search.length > 0 || queryBuilder.rules.length > 0) && (
              <span onClick={clearFilterHandler}>
                <Icon className={'cross-icon'} name={'close-outlined'} />
              </span>
            )}
            <Button data-test-id="search-dropdown-button" className="filter-btn" onClick={clickHandler}>
              <Icon
                className={`filter-icon ${dropdownActive ? 'filter-icon-background' : ''}`}
                name={`${queryBuilder.rules.length > 0 ? 'filter-selected' : 'filter-basic'}`}
              />
            </Button>
          </>
        }
      />
      <div data-test-id="search-dropdown-div" className={`dropdown ${dropdownActive ? 'dropdown-active' : 'dropdown-disable'}`}>
        <SearchDropDown
          fields={searchAttributes.attributes}
          query={queryBuilder}
          onQueryChange={(q) => setQueryBuilder(q)}
          clickHandler={clickHandler}
          handleApplyFilter={handleApplyFilter}
        />
      </div>
    </div>
  );
};

export default Center;
