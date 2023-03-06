import Tag from '../../atoms/tag/tag';
import { generateUniqueId } from '../../../utils/generate-unique-id/generate-unique-id';
import getTagStatusColor from '../../../utils/get-tag-status-color/get-tag-status-color';

const MultipleTags = ({ tags }: { tags: Array<string> }) => (
  <>
    {tags.map((tag, i) => {
      const color = getTagStatusColor(tag);
      return (
        <Tag color={color} key={generateUniqueId()} data-test-id={`tag-test-${i}`}>
          {tag}
        </Tag>
      );
    })}
  </>
);

export default MultipleTags;
