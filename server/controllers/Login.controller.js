export function login(req, res){
    // This isn't necessary anymore, redirect can be done through passport.authenticate() call in router
    res.redirect('/');
}
