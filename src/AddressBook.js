function AddressBook () {
  this.contacts = [];
  this.addContact = (contact) => {
    this.contacts.push(contact);
  };
  this.getContact = (contact) => {
    return this.contacts[contact];
  };
  this.deleteContact = (index) => {
    if (this.contacts){
      this.contacts.splice(index,1);
    }
    else {return;}
  };

};
