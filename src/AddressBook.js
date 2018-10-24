function AddressBook () {
  this.contacts = [];
  this.addContact = (contact) => {
    this.contacts.push(contact);
  }
  this.getContact = (contact) => {
    return this.contacts[contact];
  }
};
