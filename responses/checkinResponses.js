/**
 * Created by Vampiire on 8/9/17.
 */

const val = require('../tools/valStringer');

checkinResponse = () => {
    return {
        response_type: 'in_channel',
        text: "Check In \nUse the following interactive message sequence to define and check-in to your activity."
    };
};

activitySelect = valueObject => {

    const menuItems = ['Accountability', 'Pair programming', 'Team meeting'];

    let response = checkinResponse();
    response.attachments = [val.menu( null, valueObject, menuItems, 'Select a check-in type', 'activitySelect', 'kind')];

    return response;

};

taskSelect = valueObject => {

    const menuItems = ['code wars', 'tutorial', 'other'];

    let response = checkinResponse();
    response.attachments = [val.menu( null, valueObject, menuItems, 'Select a task', 'taskSelect', 'task')];

    return response;
};

submitCheckin = valueObject => {
    valueObject = JSON.parse(valueObject);
    const partners = valueObject.partners;

    let kind = valueObject.kind;
    switch(valueObject.kind){
        case 'Accountability':
        case 'Pair programming':
            kind = `${kind} session`;
            break;
    }

    let partnerString = ``;
    partners.forEach( (partner, index) => {
        if(partners.length === 1) partnerString += `@${partner}`;
        else if(index === partners.length-1) partnerString += `and @${partner}`;
        else partnerString += `@${partner} `;
    });

    return valSubmit(valueObject, 'checkin', true,
        `Check-in to *${kind}* to work on *${valueObject.task}*\nCheck-in will be processed for: *${partnerString}*`);
};

module.exports = {
    checkinResponse,
    activitySelect,
    taskSelect,
    submitCheckin
};
