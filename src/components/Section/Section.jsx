import sty from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children }) => (
  <section className={sty.Section}>{children}</section>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;