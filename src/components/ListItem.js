import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  checked, senderAddress, subject, read,
}) => (
  <div className={read ? 'read' : 'unread'}>
    <input type="checkbox" checked={checked} />
    <p>{senderAddress}</p>
    <p>{subject}</p>
  </div>
);

ListItem.propTypes = {
  checked: PropTypes.bool,
  senderAddress: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
};

ListItem.defaultProps = {
  checked: false,
};

export default ListItem;
