'use client'

import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const DotBadge = (props = {
	bg: 'light-primary',
	className:'me-2'
}) => {
	return (
		<span className={props.className}>
		<Badge bg={props.bg} className="badge-dot"></Badge> {props.children}
	</span>
	);
};

DotBadge.propTypes = {
	bg: PropTypes.string,
	className: PropTypes.string
};

export default DotBadge;
