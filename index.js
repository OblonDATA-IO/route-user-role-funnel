/**
 * Route User Role Funnel
 * Created by Thomas Sham on 25/11/2017.
 */

/**
 * Middleware for funneling routes by req[path][field] and role
 * @module Middlewares
 * @function
 * @param {string} path - field that is to be matched in the request object
 * @param {string} field - field that is to be matched in the request object
 * @param {string} role - User role that is matched
 * @return {function}
 */
module.exports = (path = "user", field, role) => {
    if (!!field) {
        if (!!role){
            return (req, res, next) => {
                if (!!req.user && req[path][field] === role){
                    next();
                }else{
                    next('route');
                }
            }
        } else {
            throw new Error("User role has to be a string");
        }
    } else {
        throw new Error("Field has to be a string");
    }
};