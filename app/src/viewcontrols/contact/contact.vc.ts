import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import ContactRepository from '../../repositories/contact/contact.repo';

export default class ContactViewControl extends BaseViewControl {
    templateString: string = require('./contact.vc.html');

    context: any = {
        contact: <models.IContact> {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        },
        homeVC: HomeViewControl
    };

    constructor(private contactRepo: ContactRepository) {
        super();
    }
    navigatedTo(params: { id: number; }, query: any): void {
        this.context.contact = this.contactRepo.getSingleContact(params.id);
    }    
}

register.viewControl('contact-vc', ContactViewControl, [ContactRepository]);
