export const CHANGE_VIEW = 'CHANGE_VIEW';

export function changeView(view){
    return {
        type: CHANGE_VIEW,
        view
    }
}
