import { QueryBuilderAntD } from '@react-querybuilder/antd';
import React from 'react';
import { defaultValidator, QueryBuilder as ReactQueryBuilder, QueryBuilderProps } from 'react-querybuilder';

const QueryBuilder: React.FC<any> = ({ fields, query, onQueryChange }: QueryBuilderProps) => (
  <QueryBuilderAntD>
    <ReactQueryBuilder
      fields={fields}
      query={query}
      onQueryChange={onQueryChange}
      addRuleToNewGroups={true}
      showNotToggle={true}
      validator={defaultValidator}
    />
  </QueryBuilderAntD>
);

export default QueryBuilder;
