import test from 'ava';
import { actionTest } from 'redux-ava';
import { checkIfFieldsValid, invalidField, INVALID_FIELD, RESET_INVALID_STATUS, resetInvalidStatus } from '../LandingActions';


test(t => {
	t.deepEqual([1, 2], [1, 2]);
});

test('should return the correct type for invalidField', actionTest(invalidField, "memes", { type: INVALID_FIELD, field:"memes" }));

test('should return the correct type for resetInvalidStatus', actionTest(resetInvalidStatus, null, { type: RESET_INVALID_STATUS }));
