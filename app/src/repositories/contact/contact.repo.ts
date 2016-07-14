import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class ContactRepository extends BaseRepository {

    contacts: Array<models.IContact> = [];
    
    getContacts(): Array<models.IContact> {
        return this.utils.clone(this.contacts, true);
    }

    saveContact(firstName: string, lastName: string, email: string, phoneNumber: string) {
        let contact: models.IContact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        }
        this.contacts.push(contact);
        return this.contacts
    }

    getSingleContact(id: number): models.IContact {
        return this.contacts[id];
    }
}

register.injectable('contact-repo', ContactRepository);
