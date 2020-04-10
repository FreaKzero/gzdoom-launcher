import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Tags = styled.ul`
  user-select: none;
  list-style: none;
  display: inline-block;
`;

const Tag = styled.li`
  transition: ${({ theme }) => theme.transition.out};
  color: ${({ theme }) => theme.color.meta};
  display: inline;
  margin-right: 5px;
  font-size: 12px;
  border: ${({ theme }) => `1px solid ${theme.color.meta}`};
  border-radius: 4px;
  padding: 0 6px 0 6px;
`;

const TagList = ({ item }) => {
  return item.tags.length ? (
    <Tags>
      {item.tags.map(tag => {
        return <Tag key={`${item.id}_${tag}`}>{tag}</Tag>;
      })}
    </Tags>
  ) : null;
};

TagList.propTypes = {
  item: PropTypes.any
};

export default TagList;
