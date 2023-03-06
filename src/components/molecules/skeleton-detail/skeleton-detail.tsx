import React from 'react';
import SkeletonInput from 'antd/lib/skeleton/Input';
import Col from '../../atoms/col/col';
import { SkeletonAvatar, SkeletonButton } from '../../atoms/skeleton';
import Row from '../../atoms/row/row';

interface SkeletonDetailProps {
  md?: number;
  xl?: number;
  xxl?: number;
  type: 'input' | 'button' | 'avatar';
}

const SkeletonDetail = ({ md = 24, xl = 24, xxl = 24, type }: SkeletonDetailProps) => {
  if (type === 'input') {
    return (
      <Col md={md} xl={xl} xxl={xxl}>
        <Row>
          <Col md={12} xl={12} xxl={12}>
            <SkeletonInput active={true} block size="small" />
          </Col>
        </Row>
        <Row>
          <SkeletonInput active={true} block size="small" />
        </Row>
      </Col>
    );
  } else if (type === 'avatar') {
    return <SkeletonAvatar active={true} />;
  } else {
    return <SkeletonButton block active={true} size="large" />;
  }
};

export default SkeletonDetail;
