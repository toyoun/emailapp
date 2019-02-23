import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  checked, senderAddress, details, read,
}) => (
  <div className={read ? 'read' : 'unread'}>
    <input type="checkbox" checked={checked} />
    <p>{senderAddress}</p>
    <p>{details}</p>
  </div>
);

ListItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  senderAddress: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
};

export default ListItem;
