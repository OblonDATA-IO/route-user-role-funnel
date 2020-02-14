/**
 * Route User Role Funnel
 * Created by Thomas Sham on 25/11/2017.
 */

/**
 * Middleware for funneling requests by req[path][field] and role
 * @module Middlewares
 * @function
 * @param {string} path - field that is to be matched in the request object
 * @param {string} field - field that is to be matched in the request object
 * @param {string} role - User role that is matched
 * @return {function}
 */
module.exports = (path = "user", field, role) => {
    if (!field) {
        throw new Error("Field has to be a string");
    }

    if (!role) {
        throw new Error("User role has to be a string");
    }

    return (req, res, next) => {
        if (
            req.user &&
            req[path][field] === role
        ) {
            next();
        } else {
            next("route");
        }
    };
};
