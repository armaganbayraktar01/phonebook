export const ADD_CONTACT = 'ADD_CONTACT';

function addContact(contactName, contactNumber) {
    return {
        type: ADD_CONTACT,
        payload: {
            name: contactName,
            number: contactNumber
        }

    }
}

export default addContact;