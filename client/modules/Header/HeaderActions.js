import callApi from '../../util/apiCaller';


export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export function toggleSidebar(){
    return {
        type: TOGGLE_SIDEBAR,
    }
}

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
