import PropTypes from 'prop-types';
import React, { useLayoutEffect, useRef, useState } from 'react';
import VirtualList from 'react-tiny-virtual-list';
import styled from 'styled-components';

import ModItem from './ModItem';

const BoxStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.border.idle};
  border-radius: ${({ theme }) => theme.border.radius};
  background: ${({ theme }) => theme.box.backdrop};
  backdrop-filter: blur(5px);
  flex-grow: 1;
  padding: 10px;
  height: calc(100vh - 140px);

  & > ul > div {
    padding-right: 5px;
    ${({ theme }) => theme.scrollbar};
  }
`;

const ModBox = ({ data, onClick, fixed }) => {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(365);

  useLayoutEffect(() => {
    const updateSize = () =>
      setHeight(boxRef.current.getBoundingClientRect().height - 85);

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <BoxStyle fixed={fixed} ref={boxRef}>
      {fixed ? <div className="fixed">{fixed}</div> : null}

      <ul>
        <VirtualList
          width="100%"
          height={height}
          itemCount={data.length}
          itemSize={77}
          renderItem={({ index, style }) => (
            <ModItem
              style={style}
              key={`mod_${data[index].id}`}
              item={data[index]}
              onSelect={onClick(data[index].id)}
            />
          )}
        />
      </ul>
    </BoxStyle>
  );
};

ModBox.propTypes = {
  data: PropTypes.any,
  fixed: PropTypes.element,
  onClick: PropTypes.func.isRequired
};

export default ModBox;
