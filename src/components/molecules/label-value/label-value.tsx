import React from 'react';
import TextHighlighter from '../../atoms/text-highlighter/text-highlighter';
import { Text } from '../../atoms/typography';

interface LabelValueProps {
  title: string;
  value: string;
  searchText?: Array<string>;
}

const LabelValue = ({ title, value, searchText = [''] }: LabelValueProps) => {
  return (
    <div className="label-value">
      <Text className="title" data-test-id="test-labelValue-label">{`${title}:`}</Text>
      <TextHighlighter
        highlightClassName="highlight"
        searchWords={searchText}
        autoEscape={true}
        textToHighlight={value}
        data-test-id="test-labelValue-textHighlighter"
      />
    </div>
  );
};

export default LabelValue;
