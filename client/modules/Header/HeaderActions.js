import callApi from '../../util/apiCaller';


/**
 This helps specify if the sidebar is toggled on or off
*/
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';

export function toggleSidebar(){
    return {
        type: TOGGLE_SIDEBAR,
    }
}

export function addSettings(settings){
   return {
        type: LOAD_SETTINGS,
        settings
    }
}

/**
  Sends the logout request to the api and redirects to landing
*/
export function sendLogoutRequest(){
    const apiUrl = 'logout';
    return (dispatch) => {
        return callApi(apiUrl, "get").then(res => {
            if (res){
                window.location.pathname = '/landing';
            }
        });
    }
}

export function loadSettings(){
    const apiUrl = 'loadSettings';
    return (dispatch) => {
        return callApi(apiUrl).then(res => {
            if (res){
                console.log(res);
                dispatch(addSettings(res));
            }
        });
    }
}
