import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import styles from '#Style';

import BackDrop from './Backdrop';

const Dialog = motion.custom(styled.div`
  font-family: ${styles.font.content};
  background: ${styles.color.back};
  position: absolute;
  left: ${p => (p.tiny ? '25%' : '15%;')};
  top: 40px;
  width: ${p => (p.tiny ? '45%' : '75%;')};
  padding: 15px;
  border-radius: 4px;
  z-index: 999;

  & .element {
    color: white;
  }

  & h1 {
    font-size: 16px;
    font-family: ${styles.font.head};
    text-transform: uppercase;
    color: #ffa800;
    text-shadow: 0 -1px 4px #ff0000, 0 0 15px #ff0000;
    margin-bottom: 15px;
  }
`);

const ModalMotion = ({ children, title, tiny }) => {
  const variants = {
    init: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 1.5
    }
  };
  return (
    <Dialog
      tiny={tiny}
      variants={variants}
      transition={{ type: 'tween', ease: 'anticipate' }}
      initial="exit"
      animate="init"
      exit="exit"
    >
      <h1 className="title">{title}</h1>
      <div className="element">{children}</div>
    </Dialog>
  );
};

ModalMotion.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  tiny: PropTypes.bool
};

const Modal = ({
  title,
  children,
  onBackdrop,
  active,
  tiny = false,
  strict = false
}) => {
  return createPortal(
    <>
      <AnimatePresence>
        {active && (
          <>
            <BackDrop active={active} onClick={strict ? null : onBackdrop} />
            <ModalMotion tiny={tiny} title={title}>
              {children}
            </ModalMotion>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
};

export default Modal;
