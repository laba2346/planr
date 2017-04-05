import test from 'ava';
import { reducerTest } from 'redux-ava';

test(t => {
	t.deepEqual([1, 2], [1, 2]);
});
