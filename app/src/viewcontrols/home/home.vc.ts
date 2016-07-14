import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ContactViewControl from '../contact/contact.vc';
import ContactRepository from '../../repositories/contact/contact.repo';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        contacts: <Array<models.IContact>>[],
        contactVC: ContactViewControl
    };

    constructor(private contactRepo: ContactRepository) {
        super();
    }

    navigatedTo(): void {
        this.refreshContacts();
    }

    saveContact(): void {
        this.contactRepo.saveContact(this.context.contact.firstName, this.context.contact.lastName, this.context.contact.email, this.context.contact.phoneNumber);
        this.refreshContacts();
        this.clearForm();
    }

    refreshContacts(): void {
       let contacts = this.contactRepo.getContacts();
       this.context.contacts = contacts;
    }
    
    clearForm(): void {
        this.context.contact.firstName = null;
        this.context.contact.lastName = null;
        this.context.contact.email = null;
        this.context.contact.phoneNumber = null;
    }
}

register.viewControl('home-vc', HomeViewControl, [ContactRepository]);
