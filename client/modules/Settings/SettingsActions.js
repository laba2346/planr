import callApi from '../../util/apiCaller';
/**
    A constant containing the string 'INVALID_FIELD'; used in reducer
*/
export const INVALID_FIELD = 'INVALID_FIELD';
/**
    A constant containing the string 'RESET_INVALID_STATUS'; used in reducer
*/
export const RESET_INVALID_STATUS = 'RESET_INVALID_STATUS';
/**
    A constant containing the string 'CHANGE_THEME'; used in reducer
*/
export const CHANGE_THEME = 'CHANGE_THEME';
/**
    A constant containing the string 'RESET_SETTINGS; used in reducer
*/
export const RESET_SETTINGS = 'RESET_SETTINGS';
/**
    A constant containing the string 'SUCCESS'; used in reducer
*/
export const SUCCESS = 'SUCCESS';
/**
    A constant containing the string 'RESET_SUCCESS'; used in reducer
*/
export const RESET_SUCCESS = 'RESET_SUCCESS'

/**
    Returns an object with type CHANGE_THEME and a new theme color.
    @param {String} themeColor color code for the new theme color.
*/
export function changeTheme(themeColor){
    return {
        type: CHANGE_THEME,
        themeColor
    }
}

/**
    Makes an API call to update the settings. If successful, it dispatches success
    @param {Object} formState Object containing information from the submitted settings form
*/
export function changeSettingRequest(formState){
    const apiUrl = 'updateSettings';
    console.log(formState.email)
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if(res.success){
                dispatch(success());
            }
        });
    }
}

/**
    Returns an object with type SUCCESS so that the state can change.
*/
export function success(){
    console.log("memes")
    return {
        type: SUCCESS,
    }
}

/**
    Returns an object with type RESET_SUCCESS so that the state can change.
*/
export function resetSuccess(){
    return {
        type: RESET_SUCCESS,
    }
}

/**
    Confirms that the formState has valid inputs.
    @param {Object} formstate Object containing information from the submitted settings form
*/
export function checkIfFieldsValid(formState){
    return (dispatch) => {

        var emailreg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var usernamereg = /(?=^.{8,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/
        var passwordreg = /(?=^.{8,80}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/

        if (formState.email !== '' && emailreg.exec(formState.email) === null){
            dispatch(invalidField("email"));
            return false;
        }

        if (formState.password1 !== formState.password2){
            console.log("passwords dont match");
            dispatch(invalidField("password"));
            return false;
        }

        if (formState.username !== '' & usernamereg.exec(formState.username) === null){
            console.log("test");
            dispatch(invalidField("username"));
            return false;
        }

        if (passwordreg.exec(formState.password) === null){
            dispatch(invalidField("password"))
            return false;
        }

        dispatch(resetSettings());
        return true;
    }
}

/**
    Returns an object with type INVALID_FIELD and the field that was invalid.
    @param {String} field The field that was incorrect in checkIfFieldsValid.
*/
export function invalidField(field){
    console.log("invalid field: " + field)
    return {
        type: INVALID_FIELD,
        field
    }
}
/**
    Returns an object with type RESET_SETTINGS.
*/
export function resetSettings(){
    return {
        type: RESET_SETTINGS,
    }
}
