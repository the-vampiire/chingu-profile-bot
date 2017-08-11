/**
 * Created by Vampiire on 7/4/17.
 *
 *
 * holds all verification functions
 *
 *
 * slash --> verify all incoming slash post requests
 *
 * site --> verify all incoming post requests are from the Chingu website
 *
 */

slash = (tokenID, team = null) => {

    // expand to include all the available Chingu team ID's in an array
    // to check alongside the tokenID

    // const authorizedTeamIDs = [];
        // have this stored in a database that AutoBot can update
        // call it in here to always have the most up to date list
    const token = process.env.slack_verification;

    return tokenID === token;
};


module.exports = {
    slash : slash
};