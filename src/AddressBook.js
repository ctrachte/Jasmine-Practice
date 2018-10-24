function AddressBook () {
  this.contacts = [];
  this.initialComplete;
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

  this.getInitialContacts = (cb) {
    var self = this;
    setTimeout(function (){
      self.initialComplete = true;
      if (cb) {
        return cb();
      }
    }, 3);
  }
};
