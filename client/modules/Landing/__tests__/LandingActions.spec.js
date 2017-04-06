import test from 'ava';
import { actionTest } from 'redux-ava';
import { sendSignUpRequest, checkIfFieldsValid, invalidField, INVALID_FIELD, RESET_INVALID_STATUS, resetInvalidStatus } from '../LandingActions';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

test(t => {
	t.deepEqual([1, 2], [1, 2]);
});

test('should return the correct type for invalidField', actionTest(invalidField, "memes", { type: INVALID_FIELD, field:"memes" }));

test('should return the correct type for resetInvalidStatus', actionTest(resetInvalidStatus, null, { type: RESET_INVALID_STATUS }));

test('checkIfFieldsValid action', t => {
    return new Promise((resolve, reject) => {
        const mockStore = configureStore([thunkMiddleware])
        const store = mockStore({ data: [] })
        const formState = { email:"meme", username:"aaron", password:"dogs" }
        const expectedActions = [{ type: INVALID_FIELD, field: "email" }]

        store.dispatch(checkIfFieldsValid(formState))
        t.same(store.getActions(), expectedActions)
        resolve()
    })
})

test('checkIfFieldsValid action -- invalid', t => {
    return new Promise((resolve, reject) => {
        const mockStore = configureStore([thunkMiddleware])
        const store = mockStore({ data: [] })
        const formState = { email:"meme@mon.key", username:"", password:"dogs" }
        const expectedActions = [{ type: INVALID_FIELD, field: "username" }]

        store.dispatch(checkIfFieldsValid(formState))
        t.same(store.getActions(), expectedActions)
        resolve()
    })
})

test('checkIfFieldsValid action -- valid', t => {
    return new Promise((resolve, reject) => {
        const mockStore = configureStore([thunkMiddleware])
        const store = mockStore({ data: [] })
        const formState = { email:"meme@mon.key", username:"aaron", password:"yoyo" }
        const expectedActions = [{ type: RESET_INVALID_STATUS }]

        store.dispatch(checkIfFieldsValid(formState))
        t.same(store.getActions(), expectedActions)
        resolve()
    })
})

test('sendSignUpRequest action -- invalid', t => {
    return new Promise((resolve, reject) => {
        const mockStore = configureStore([thunkMiddleware])
        const store = mockStore({ data: [] })
        const formState = { email:"meme@mon.key", username:"aaron", password:"yoyo" }
        const expectedActions = [{ type: INVALID_FIELD, field:"email"}]

        nock('http://localhost:8080/')
            .post('/api/signUp', formState)
            .reply(200, {
                newUser: false, existingField:"email"
            })

        store.dispatch(sendSignUpRequest(formState))
            .then(() => {
                t.same(store.getActions(), expectedActions)
                resolve()
            })
    })
})

test('sendSignUpRequest action -- invalid', t => {
    return new Promise((resolve, reject) => {
        const mockStore = configureStore([thunkMiddleware])
        const store = mockStore({ data: [] })
        const formState = { email:"meme@mon.key", username:"aaron", password:"yoyo" }
        const expectedActions = [{ type: INVALID_FIELD, field:"username"}]

        nock('http://localhost:8080/')
            .post('/api/signUp', formState)
            .reply(200, {
                newUser: false, existingField:"username"
            })

        store.dispatch(sendSignUpRequest(formState))
            .then(() => {
                t.same(store.getActions(), expectedActions)
                resolve()
            })
    })
})

test('sendSignUpRequest action -- valid', t => {
    return new Promise((resolve, reject) => {
        const mockStore = configureStore([thunkMiddleware])
        const store = mockStore({ data: [] })
        const formState = { email:"meme@mon.key", username:"aaron", password:"yoyo" }
        const expectedActions = []

        nock('http://localhost:8080/')
            .post('/api/signUp', formState)
            .reply(200, {
                newUser: true
            })

        store.dispatch(sendSignUpRequest(formState))
            .then(() => {
                t.same(store.getActions(), expectedActions)
                resolve()
            })
    })
})
