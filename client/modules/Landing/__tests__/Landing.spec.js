import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

test(t => {
	t.deepEqual([1, 2], [1, 2]);
});
