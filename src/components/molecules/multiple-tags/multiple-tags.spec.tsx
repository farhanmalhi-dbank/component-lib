import { render, screen } from '@testing-library/react';
import { getTagStatusColor } from '../../../utils/get-tag-status-color/get-tag-status-color';
import MultipleTags from './multiple-tags';

const tags = ['PENDING', 'SUCCESS', 'NICE'];
const multipleTagsTestId = 'tag-test-';

describe('Table Tags Column', () => {
  it('should render multiple tags fine', async () => {
    render(<MultipleTags tags={tags} />);
    for (let index = 0; index < tags.length; index++) {
      const element = await screen.getByTestId(`${multipleTagsTestId}${index}`);
      expect(element).toBeInTheDocument();
      const color = getTagStatusColor(tags[index]);
      expect(element).toHaveClass(`ant-tag-${color}`);
    }
  });

  it('should render one tag fine', async () => {
    render(<MultipleTags tags={[tags[0]]} />);
    const element = await screen.getByTestId(`${multipleTagsTestId}${0}`);
    expect(element).toBeInTheDocument();
    const color = getTagStatusColor(tags[0]);
    expect(element).toHaveClass(`ant-tag-${color}`);
  });
});
