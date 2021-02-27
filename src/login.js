import passport from 'passport';
import { Strategy } from 'passport-local';
import { userStrategy, serializeUser, deserializeUser } from './users.js';

// Hægt að útfæra passport virkni hér til að létta á app.js
passport.use(new Strategy(userStrategy));

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

export default passport;
