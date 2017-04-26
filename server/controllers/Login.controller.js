
/**
    If this function is called, you did it wrong. It is not supposed to be used.
*/
export function login(req, res){
    // This isn't necessary anymore, redirect can be done through passport.authenticate() call in router
    res.redirect('/app');
}
