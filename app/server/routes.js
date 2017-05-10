import global from 'app/server/routes/global';
import users from 'app/server/routes/users';

export default function routes(app) {
    app.use('/api/global', global);
    app.use('/api/users', users);
}
