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
 * @param {string, array} roles - User role that is matched
 * @return {function}
 */
module.exports = (path = "user", field, roles) => {
    if (!field) {
        throw new Error("Field has to be a string");
    }

    if (!roles) {
        throw new Error("Roles has to be a string or an array");
    }

    if (typeof roles === "string") {
        roles = [roles];
    }

    return (req, res, next) => {
        if (
            req[path] &&
            roles.includes(req[path][field])
        ) {
            next();
            return;
        }
        next("route");
    };
};
