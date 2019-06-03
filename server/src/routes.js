const AuthenticationController=require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')
const SongsController=require('./controllers/SongsController')
const BookMarkController=require('./controllers/BookMarkController')
const isAuthenticated=require('./policies/isAuthenticated')
module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicy.register,
    AuthenticationController.register),
    app.post('/login',
    AuthenticationController.login),
    app.get('/songs',SongsController.index),
    app.post('/songs',SongsController.post),
    app.get('/songs/:songId',SongsController.Show),
    app.post('/songs/:songId',SongsController.put),
    app.get('/bookmarks',isAuthenticated,BookMarkController.index),
    app.post('/bookmarks',isAuthenticated,
    BookMarkController.post)
  app.delete('/bookmarks/:bookmarkId',isAuthenticated,
    BookMarkController.remove)
}