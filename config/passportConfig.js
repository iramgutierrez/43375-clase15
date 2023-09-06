const passport = require('passport');
const local = require('passport-local');
const userModel = require('../models/userModel');
const { createHash, isValidPassword } = require('../utils/utils');
const cartModel = require('../models/cartModel');

const LocalStrategy = local.Strategy;

const initializePassport = () => {

    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {

            try {

                const existe = await userModel.findOne({ email: username });
                // console.log()
                if (existe) {
                    console.log('ya existe');
                    return done(null, false);
                }

                const newUser = {
                    name: req.body.name,
                    email: username,
                    password: createHash(password),
                }


                const usuario = await userModel.create(newUser);

                return done(null, usuario);



            } catch (error) {

                return done(error);

            }




        }
    ));

    passport.use('login', new LocalStrategy(
        { usernameField: 'email' }, async (username, password, done) => {

            try {

                const existe = await userModel.findOne({ email: username });
                console.log(existe.cart)
                if (!existe) {
                    console.log('no existe');
                    return done(null, false, {
                        message: 'no existe el usuario'
                    });
                }

                if (!isValidPassword(password, existe.password)) {
                    return done(null, false, {
                        message: 'credenciales incorrectas'
                    });
                }
                
                if (!existe.cart) {
                    const newCart = await cartModel.create({
                        name: 'default'
                    })

                    await userModel.updateOne({ _id: existe._id}, {cart: newCart._id })
                }
                return done(null, existe);

            } catch (error) {

            }

        }
    ))


    passport.serializeUser((user, done) => {
        return done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id).populate('cart');

        return done(null, user);
    });
}


module.exports = initializePassport;